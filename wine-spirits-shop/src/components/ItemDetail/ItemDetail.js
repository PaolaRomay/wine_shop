import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ItemDetail({producto}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  return (
    <>
        <Modal.Dialog show={show} onHide={handleClose} className="modal show" style={{ display: 'block', position: 'initial' }}>
          <Modal.Header closeButton>
            <Modal.Title>{producto.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={producto.img} className="center" alt=''></img>
            <p>{producto.description} {producto.origen}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
          ${producto.precio}
          </Button>
          </Modal.Footer>
        </Modal.Dialog>
    </>
  );
}

export default ItemDetail;