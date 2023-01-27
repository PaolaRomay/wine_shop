import { faC } from "@fortawesome/free-solid-svg-icons";
import { createContext, createFactory, useState } from "react";

export const contexto = createContext()
const {Provider} = contexto

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setQuantity] = useState(0);

    //agrega item al carrito
    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            setQuantity(totalQuantity+quantity)
            const itemIndex = cart.findIndex(prod => prod.id === item.id)
            console.log(JSON.stringify(cart[itemIndex]))
            cart[itemIndex].quantity = cart[itemIndex].quantity +quantity
            item.stock = item.stock-quantity
        } else{
            const id = item.id
            console.log(id)
            let auxCart = cart.concat({id, item, quantity})
            setCart(auxCart)
            setTotal(total+ (item.price * quantity))
            setQuantity(totalQuantity+quantity)
            item.stock = item.stock-quantity
        }
    }
    //remueve item del carrito
    const removeItem = (idProduct) => {
        const itemIndex = cart.findIndex(prod => prod.id === idProduct)
        setQuantity(totalQuantity-cart[itemIndex].quantity)
        cart[itemIndex].item.stock = cart[itemIndex].item.stock+cart[itemIndex].quantity

        const filterCart = cart.filter((item) => item.id !== idProduct)
        setCart(filterCart)
    }
    //chequea si esta en el carrito
    const isInCart = (idProduct) => {
        const res = (cart.find(prod => prod.id === idProduct) != undefined ) ? true : false
        return res
    }
    //remueve todos los items
    const clear = () => {  
        cart.map(prod => {
            setQuantity(totalQuantity-prod.quantity)
            prod.item.stock = prod.item.stock+prod.quantity
        }
        )
        setCart([])
    }

    const contextValue = {
        cart,
        total,
        totalQuantity,
        addItem,
        removeItem,
        isInCart,
        clear
    }

    return(
        <Provider value= {contextValue}>
            {children}
        </Provider>
    )
}
export default CartProvider