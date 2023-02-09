import React, { useContext } from "react";
import { contexto } from "../CartContext/CartProvider";
import {Link} from "react-router-dom";

function Cart(){

    const {cart, totalQuantity, total, removeItem, clear} = useContext(contexto)
    console.log(JSON.stringify(cart))

    const aux = totalQuantity < 1 ? true : false  

    return (
        <>
        {
            aux ? (
                <div className="text-center mt-5">
                    <h1>No hay articulos en el carrito</h1>
                    <Link className="btn btn-primary bg-gradient w-25" to="/">
                        Ir a comprar
                    </Link>
                </div>
            ) : (
            <div>
                <div className="container">
                    <div className="row mt-4 justify-content-center text-center">
                        <div className="row">
                            <div className="col-3">
                            </div>
                            <div className="col-3">
                                <h5>Nombre:</h5>
                            </div>
                            <div className="col-2">
                                <h5>Precio:</h5>
                            </div>
                            <div className="col-1">
                                <h5>Cantidad:</h5>
                            </div>
                            <div className="col-2">
                                <h5>Total:</h5>
                            </div>
                            <div className="col-1">
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center text-center">
                        {cart.map(prod => 
                        <div className="row" key={prod.id}>
                            <div className="col-3">
                                <img src={prod.item.img} style={{width:150}}></img>
                            </div>
                            <div className="col-3">
                                <h5>{prod.item.name}</h5>
                            </div>
                            <div className="col-2">
                                <h5>${prod.item.precio}</h5>
                            </div>
                            <div className="col-1">
                                <h5>{prod.quantity}</h5>
                            </div>
                            <div className="col-2">
                                <h5>${prod.quantity * prod.item.precio}</h5>
                            </div>
                            <div className="col-1">
                                <button className="btn btn-danger bg-gradient" onClick={()=> removeItem(prod.item.id)} >Eliminar</button>
                            </div>
                        </div>
                        )}
                        <h5 className="text-center mt-3">Cantidad total de productos: {totalQuantity}</h5>
                        <h5 className="text-center mt-3">Total a pagar: ${total}</h5>
                       <div className="d-flex justify-content-center">
                            <button className="btn btn-danger bg-gradient" onClick={clear}>Vaciar Carrito</button>
                            <Link to="/checkout">
                                <button className="btn btn-danger bg-gradient ms-3">Procesar Compra</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            )
          }
          </>
    );
};

export default Cart