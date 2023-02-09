import { useState, useContext } from 'react'
import { getFirestore, collection, writeBatch, addDoc, Timestamp, doc} from 'firebase/firestore'
import { contexto } from '../CartContext/CartProvider';
import { Link } from 'react-router-dom'

const FormBuyer = () => {

    const [orderId, setOrderId] = useState('')
    const [creatingOrder, setCreatingOrder] = useState(false)

    const [formData, setFormData] = useState({
        name:"", email:"", phone:""
    })
    const { cart, total, clear } = useContext(contexto)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const createOrder = (e) => {
        e.preventDefault();
        setCreatingOrder(true)
        delete formData.emailConfirm
        let order = {}
        order.date = Timestamp.fromDate(new Date())
        order.buyer = formData
        order.total = total
        
        order.items = cart.map(cartItem => {
            const id = cartItem.id
            const name = cartItem.item.name
            const price = cartItem.item.precio
            const quantity = cartItem.quantity
            const totalPrice = cartItem.item.precio * cartItem.quantity
            return {id, name, price, quantity, totalPrice}
        })

        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
        .then(resp => setOrderId(resp.id))
        .catch(err => console.log(err))
        .finally(() => { 
            setCreatingOrder(false)
            updateStock()
            clear()
            setFormData({
                name:"", email:"", phone:""
            })
        })

        function updateStock() {
            const batch = writeBatch(db)

            order.items.map(el => {
                let updateDoc = doc(db, 'products', el.id)
                let currentStock = cart.find(item => item.id === el.id).stock

                batch.update( updateDoc, {
                    stock: currentStock - el.quantity
                })
            })

            batch.commit()
        }
    }

    return (
        <> 
        {creatingOrder
        ?
            <>      
                <h4 className="mt-5 text-center">Procesando su orden, espere un momento...</h4>
        </>
        :
        orderId
        ? 
            <div className="container">
                <div className="py-5 text-center mt-5">
                    <h2 className="mt-5">¡Gracias por elegirnos!</h2>
                    <h4 className="my-5">La compra se ha realizado exitosamente.</h4>
                    <strong>El ID de tu compra es {orderId}</strong><br />
                    <Link className="btn btn-danger bg-gradient mt-5" to={"/"}>
                        <strong>Volver al inicio</strong>
                    </Link>
                </div>
            </div>
        :
            <div className="container mt-5 form__container d-flex">
                <div className="container align-self-center position-relative">
                    <div className="row">
                        <div className="col-12">
                            <form onSubmit={createOrder} onChange={handleChange}>
                                <div className="mb-3 d-flex flex-column align-items-center">
                                    <label className="form-label">Nombre</label>
                                    <input type="name" className="form-control form-control--color" name="name" placeholder="Andres Perez" defaultValue={formData.name} required />
                                </div>
                                <div className="mb-3 d-flex flex-column align-items-center">
                                    <label className="form-label">Teléfono</label>
                                    <input type="text" className="form-control form-control--color" name="phone" placeholder="091xxxxxx" defaultValue={formData.phone} required />
                                </div>
                                <div className="mb-3 d-flex flex-column align-items-center">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control form-control--color" name="email" placeholder="hola@gmail.com" defaultValue={formData.email} required />
                                </div>
                                <button className="btn btn-danger bg-gradient">Comprar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default FormBuyer