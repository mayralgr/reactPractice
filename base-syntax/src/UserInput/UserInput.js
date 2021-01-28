import React from 'react';
import './UserInput.css';
const UserInput = (props) => {
    return (
            <input className="input" 
                    type="text" 
                    onChange={props.change} 
                    value={props.name}/>
    )
};

export default UserInput;