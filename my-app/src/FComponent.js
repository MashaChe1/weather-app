import React, { useState } from 'react';

export default function FComponent (props) {
    const [ age, setage ] = useState(0);
    
    return (
        <div>
            <button onClick={() => setage(age + 1)}>Add age</button>
            <h1>Hello Again! {props.firstName} {props.lastName} age: {age}</h1>
        </div>
    )
}

FComponent.defaultProps = {
    firstName: "Anfrej",
    lastName: "Mehtijev",
  }
