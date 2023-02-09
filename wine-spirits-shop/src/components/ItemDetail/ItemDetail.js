import React, { useState, useContext } from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ItemCount from '../ItemCount/ItemCount';
import { contexto } from '../CartContext/CartProvider';

function ItemDetail({producto}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {addItem} = useContext(contexto)


  const[goToCarrito, setGoToCarrito] = useState(false) //controla si esta confirmado
  //Agrega al carrito 
  const onAdd = (cantidad) => {
    setGoToCarrito(true)
    addItem(producto, cantidad)
  }

  const availableStock = producto.stock > 0 ? true : false  
  return (
    <>
    {
      availableStock ? (
        <Button variant="primary" onClick={handleShow}>Ver más</Button>
      ) : (
        <Button variant="danger">No hay stock</Button>
      )
    }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>{producto.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <img src={producto.img} width='300px' alt=''></img>
          <p>{producto.description} {producto.origen}</p>
          <h4 className='btn'>${producto.precio}</h4>
          <br></br>
          <h4 className='btn'>Stock: {producto.stock}</h4>

          {!goToCarrito ? 
          <ItemCount inicial={1} max={producto.stock} onAdd={onAdd} /> 
          : 
          <div className="d-flex justify-content-center">
            <Link to={"/detalle/cart"}> 
              <button className="btn btn-primary bg-gradient mt-3">Terminar mi compra</button>
            </Link>
          </div>
          }
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ItemDetail;