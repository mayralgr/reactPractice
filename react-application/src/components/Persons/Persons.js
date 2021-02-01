import React from 'react';

import Person from './Person/Person';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Persons = ( props ) => (
    props.persons.map( (person , index) => {
        return <Person 
                key={person.id}
                name={person.name} 
                age={person.age}
                click={() => props.clicked( index )} // or bind this.deletePersonHandler.bind(this, i)
                changed={(event) => props.changed(event, person.id)} 
                />
      })
);

export default Persons;