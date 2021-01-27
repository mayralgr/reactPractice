import React from 'react';
import './Person.css';
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click} >I'm a {props.name} and I am {props.age} years old!</p>
            {/**In children there is any element beetween the open and close tag */}
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;