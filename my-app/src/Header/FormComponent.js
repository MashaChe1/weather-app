import { Container, Form, Button, FormLabel } from 'react-bootstrap';
import cities from './cities.json';
import dataTypes from './type.json'

export default function FormComponent (props){

   return (
      <Container>
         <Form onSubmit={props.handleOnSubmitForm}>
         <Form.Group className="mb-3" controlId="dataType"> 
         <FormLabel>Choose data type</FormLabel>
         {dataTypes.map ( dtype => 
                           <Form.Check
                           key={dtype.value}
                           type="checkbox"
                           name="dataType"
                           label={dtype.label}
                           value={dtype.value}
                         />
                           )}
         </Form.Group>  
         <Form.Group className="mb-3" controlId="language">  
         <FormLabel>TChoose language</FormLabel>
               <Form.Select name="city" aria-label="Default select example">
                  <option>Choose language</option>
                  {['en',['fi','ru']].map ( language => 
                           <option key={language}>{language}</option>
                           )}
               </Form.Select>
         </Form.Group>
            <Form.Group className="mb-3" controlId="city">
               <Form.Label></Form.Label>
               <Form.Select name="city" aria-label="Default select example">
                  <option>Choose city</option>
                  {cities.map ( city => 
                           <option key={city.city}>{city.city}</option>
                           )}
            </Form.Select>
         </Form.Group>
            <Form.Group controlId="unit">
               <Form.Label>Choose unit</Form.Label>
                  <Form.Check
                     name="unit"
                     type='radio'
                     label={`°C`}
                     value='C'
                     />
                     <Form.Check
                     name="unit"
                     type='radio'
                     label={`°F`}
                     value='F'
                     />
            </Form.Group>
            <Button variant="dark" type="submit">Submit</Button>
         </Form>
      </Container>
   )
}



