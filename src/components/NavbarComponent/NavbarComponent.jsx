import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CartWidgetComponent from '../CartWidgetComponent/CartWidget';

import "./Navbar.css";

const NavBar = () => {
  return (
    <div>
      <div className="container">
        <p>
          <a href="https://github.com/JuanP-Portillo/React-Coderhouse" className="navInfo">
            <img src="./src/assets/images/github-icon.png" alt="GitHub Icon" className="icon" style={{ width: '20px' }} />
            Github: JuanP-Portillo
          </a>{' '}
          <span className="separator">|</span>{' '}
          <a
            href="mailto:juanp.portillob@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="navInfo"
          >
            <img src="./src/assets/images/email-icon.png" alt="Email Icon" className="icon" style={{ width: '20px' }} />
            juanp.portillob@gmail.com
          </a>
        </p>
      </div>


      <div>
        <Navbar expand="lg" bg="light" variant="light" className="me-navbar-style">
          <Container fluid>

            <Navbar.Brand href="#">

              <img
                src="./src/assets/images/rocket.png"
                alt="Logo"
                className="d-inline-block align-top logo"
                style={{ width: '50px', height: '50px' }}
              />
            </Navbar.Brand>


            <Navbar.Toggle aria-controls="navbar-nav" />

            <Navbar.Collapse id="navbar-nav">

              <Nav className="me-auto gap-5 me-navBar-style">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#productos">Productos</Nav.Link>
                <Nav.Link href="#ofertas">Ofertas</Nav.Link>
                <Nav.Link href="#galeria">Galeria</Nav.Link>
                <Nav.Link href="#contacto">Contacto</Nav.Link>
              </Nav>


              <div className="d-flex align-items-center">
                <CartWidgetComponent />
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
