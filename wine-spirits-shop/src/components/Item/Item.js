import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import './Item.css'
import ItemDetail from '../ItemDetail/ItemDetail'

function Item({prod}) {
  return (
    <div class="shadow-lg p-3 mb-5 bg-white rounded margin" style={{ width: '380px'}}>
      <div class="row">
        <div class= "col-sm">
          <Card.Img variant="top" src={prod.img} style={{ width: '180px'}}/>
        </div>
        <div class="col-sm">
          <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <br></br>
            <h4 className='btn'>${prod.precio}</h4>
            <ItemDetail producto={prod}/>
          </Card.Body>
        </div>
      </div>
    </div>
  );
}

export default Item; 