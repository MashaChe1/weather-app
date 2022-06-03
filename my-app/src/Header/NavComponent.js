import React from 'react';
import { Navbar, Container } from 'react-bootstrap';


export default function NavComponent (){

   return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Container>
            <Navbar.Brand href="#home">Weather</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}
            


