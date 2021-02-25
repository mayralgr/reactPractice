import React, { PureComponent } from 'react';

import Person from './Person/Person';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

// pure component is a component with a complete props checked before update
class Persons extends PureComponent {

    // componentWillReceiveProps(props) {
    //     console.log('persons.js componentWillReceiveProps', props);
    // } --> depracted to component did update or get derived----
    componentWillUnmount() {
        console.log('persons.js, will unmount')
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[persons.js ]shouldComponentUpdate');
        
    //     return nextProps.persons !== this.props.persons;
    // }



    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[persons.js ]getSnapshotBeforeUpdate');
        return {mesage: 'snapshot!'};
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js], componentDidUpdate');
        console.log(snapshot);
    }

    render () {
        console.log('persons rendering...');
        return this.props.persons.map( (person , index) => {
            return <Person 
                    key={person.id}
                    name={person.name} 
                    age={person.age}
                    click={() => this.props.clicked( index )} // or bind this.deletePersonHandler.bind(this, i)
                    changed={(event) => this.props.changed(event, person.id)} 
                    isAuth= {this.props.isAuth}
                    />
        })
    };
}

export default Persons;