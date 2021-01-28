import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return(
        <div className="card">
            <p>Lorem ipsum with name {props.name}</p>
            <p>Lorem ipsum</p>
        </div>
    )
};

export default UserOutput;