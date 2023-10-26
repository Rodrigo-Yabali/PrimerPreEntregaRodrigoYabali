import "./NavBar.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from "../CartWidget/CartWidget";


export const NavBar = () => {
  return (
     
        <div>

<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Insumos de Computacion</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Computadoras</Nav.Link>
            <Nav.Link href="#pricing">Componentes</Nav.Link>
            <NavDropdown title="Hardware" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Monitor</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Gabinetes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Perifericos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Ofertas Especiales
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Contactanos</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Quienes Somos
            </Nav.Link>
            </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>




        </div>
    );
};


