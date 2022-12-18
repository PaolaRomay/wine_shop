import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import nameBrand from '../assets/nameBrand.png'
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3" fixed="top">
          <Container fluid>
            <img variant="top" alt="" width='180px' src={nameBrand} />
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
                    <NavDropdown.Item href="#action1">Vinos Uruguayos</NavDropdown.Item>
                    <NavDropdown.Item href="#action2">Vinos Argentinos</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Vinos Chilenos</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Vinos Resto del Mundo</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Whisky Blended</NavDropdown.Item>
                    <NavDropdown.Item href="#action6">Whisky Bourbon</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action7">Cervezas Nacionales</NavDropdown.Item>
                    <NavDropdown.Item href="#action8">Cervezas Importadas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action9">Licores</NavDropdown.Item>
                    <NavDropdown.Item href="#action10">Gin</NavDropdown.Item>
                    <NavDropdown.Item href="#action11">Ron</NavDropdown.Item>
                    <NavDropdown.Item href="#action12">Tequila</NavDropdown.Item>
                    <NavDropdown.Item href="#action13">Fernet</NavDropdown.Item>
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