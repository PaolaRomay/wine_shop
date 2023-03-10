import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './components/CartContext/CartProvider';
import FormBuyer from './components/FormBuyer/FormBuyer';
import Error404 from './Error404';

function App() {
  return (
	<CartProvider>
		<BrowserRouter>
			<div className="App">
				<NavBar />
				<Routes>
					<Route
						exact
						path="/"
						element={<ItemListContainer greeting="Bienvenid@ a Wine & Spirits Shop" />}
					/>
					<Route
						exact 
						path="/categoria/:idCategory"
						element={<ItemListContainer/>}
					/>
					<Route
						exact 
						path="/detalle/:idProduct"
						element={<ItemDetailContainer />}
					/>
					<Route
						exact 
						path="/detalle/cart"
						element={<Cart />}
					/>
					<Route
						exact 
						path="/checkout"
						element={<FormBuyer />}
					/>
					<Route
						path="*"
						element={<Error404 />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	</CartProvider>
	);



}

export default App;