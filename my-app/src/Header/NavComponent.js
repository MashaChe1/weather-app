import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import cities from './cities.json';
import { useState } from 'react';


export default function NavComponent (){

   const [ selectedCity, setSelectedCity ] = useState({city: "Choose city"});
   const [units, setUnits] = useState('');

   return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Container>
            <Navbar.Brand href="#home">Weather {units} </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                   <Nav className="me-auto">
                   <Nav.Link onClick={() => setUnits('°C')}>°C</Nav.Link>
                     <Nav.Link onClick={() => setUnits('°F')} >°F</Nav.Link>
                     <NavDropdown title= {selectedCity.city} id="collasible-nav-dropdown">

                        {cities.map ( city => 
                        <NavDropdown.Item onClick={() => setSelectedCity(city)} href="#action/3.1">{city.city}</NavDropdown.Item>
                         )}
                     </NavDropdown> 
                  </Nav>
               </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}
            


