import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

function ItemDetailContainer() {

    const {idProduct} = useParams()
    const [producto, setProducto] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const queryDb = doc(db, 'products', idProduct )
        getDoc(queryDb)
        .then(resp => setProducto( { id: resp.id, ...resp.data() } ))
    }, [idProduct])

    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer