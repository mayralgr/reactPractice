import React, { Component } from 'react';

import Person from './Person/Person';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Persons extends Component {

    // componentWillReceiveProps(props) {
    //     console.log('persons.js componentWillReceiveProps', props);
    // } --> depracted to component did update or get derived----

    render () {
        console.log('persons rendering...');
        return this.props.persons.map( (person , index) => {
            return <Person 
                    key={person.id}
                    name={person.name} 
                    age={person.age}
                    click={() => this.props.clicked( index )} // or bind this.deletePersonHandler.bind(this, i)
                    changed={(event) => this.props.changed(event, person.id)} 
                    />
        })
    };
}

export default Persons;