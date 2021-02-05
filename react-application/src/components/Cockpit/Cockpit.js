import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('cockpit useEffect');
        // http 
        setTimeout(() => {
            alert('save data to cloud');
        }, 1000);
    }, [props.persons]) // point to the data that is use in use effect
    // if passes [] it runs everytime a dependency changes, if no dependency, just runs once
    const assignedClasses = [];
    let btnClass = '';
    
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if ( props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button // alt={this.state.showPersons}
                className={btnClass}
                onClick={props.clicked}>
            Toogle persons
            </button>
        </div>
    );
}

export default Cockpit;