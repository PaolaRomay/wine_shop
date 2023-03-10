import './ItemListContainer.css'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

    const { idCategory } = useParams();

    useEffect(() => {
      const db = getFirestore();
      if (idCategory) {            
        const queryCollectionCategory = query(collection(db, 'products'), where('category', '==', idCategory) )
        getDocs(queryCollectionCategory)
        .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
        .finally(() => setLoading(false))
    } else {
        const queryCollection = collection(db, 'products')
        getDocs(queryCollection)
        .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
        .finally(() => setLoading(false))
    }
}, [idCategory])

  return (
    <div>
            <h2 className="center saludo"> {greeting} </h2>
            <div className="container">
                <div className="row">
                    { loading ? 
                        <h2 className="text-center">Cargando...</h2>
                        :
                        <ItemList productos={productos}/>
                    }
                </div>
            </div>
      </div>
  );
};

export default ItemListContainer;