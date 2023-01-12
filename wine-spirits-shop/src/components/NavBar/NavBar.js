import { Link, NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import nameBrand from '../../assets/nameBrand.png'
import CartWidget from '../CartWidget/CartWidget';

import './NavBar.css'

function NavBar() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3" fixed="top">
          <Container fluid>
            <Link to="/">
              <img variant="top" alt="" width='180px' src={nameBrand} />
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown
                    title="Categorias"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavLink className="nav-link" to="/categoria/vuruguayos">Vinos Uruguayos</NavLink>
                    <NavLink className="nav-link" to="/categoria/vargentinos">Vinos Argentinos</NavLink>
                    <NavLink className="nav-link" to="/categoria/vmundo">Vinos Resto del Mundo</NavLink>
                    <NavDropdown.Divider />
                    <NavLink className="nav-link" to="/categoria/wblended">Whisky Blended</NavLink>
                    <NavLink className="nav-link" to="/categoria/wbourbon">Whisky Bourbon</NavLink>
                    <NavDropdown.Divider />
                    <NavLink className="nav-link" to="/categoria/cnacionales">Cervezas Nacionaless</NavLink>
                    <NavLink className="nav-link" to="/categoria/cimportadas">Cervezas Importadas</NavLink>
                    <NavDropdown.Divider />
                    <NavLink className="nav-link" to="/categoria/licores">Licores</NavLink>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="primary">Buscar</Button>
                </Form>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <br></br>
                    <CartWidget/>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;