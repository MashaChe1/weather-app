import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import cities from './cities.json';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function NavComponent (){

   const [ selectedCity, setSelectedCity ] = useState({city: "Choose city"});

   return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Container>
            <Navbar.Brand href="#home">Weather</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                   <Nav className="me-auto">
                     <NavDropdown title= {selectedCity.city} id="collasible-nav-dropdown">

                        {cities.map ( city => 
                        <NavDropdown.Item onClick={() => setSelectedCity(city)} href="#action/3.1">{city.city}</NavDropdown.Item>
                         )}

                     </NavDropdown>
                  </Nav>
               </Navbar.Collapse>
            <div>
               <Button variant="outline-secondary">°C</Button> {'  '}
               <Button variant="outline-secondary">°F</Button>
            </div>
         </Container>
      </Navbar>
   )
}


