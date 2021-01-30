import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {	
    persons: [
      { id:'ffsfsf', name: 'Max', age: 28 }, 
      { id:'cabgae', name: 'Manu', age: 29 }, 
      { id:'fwoeoa', name: 'Stephanie', age: 26 }, 
    ],
    showPersons: false
  }

  switchEventHandler = ( newName ) => {
    // console.log('WAS CLICK');
    // Dont do this personState.persons[0].name = 'Maximilian';

    this.setState({
      persons: [
        { name: newName, age: 28 }, 
        { name: 'Manu', age: 29 }, 
        { name: 'Stephanie', age: 27 }, 
      ],
    })
  }

  nameChangeHandler= ( event, id ) => {
    const personIndex = this.state.persons.findIndex( person => {
      return person.id === id;
    });
    console.log(personIndex);
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // without const person = Object.assign({},this.state.persons[personIndex]);
    this.setState({
      persons: persons
    });
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons]; // or this.state.persons.slice() to copy the array
    persons.splice(index, 1);
    this.setState({persons:persons});
  }
  // better to use bind than arrow functions
  render() {
    // inline styles
    const style = {
      backgroundColor: 'green',
      color:'white',
      font:'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <div>
            { this.state.persons.map( (person , index) => {
              return <Person 
                      key={person.id}
                      name={person.name} 
                      age={person.age}
                      click={() => this.deletePersonHandler( index )} // or bind this.deletePersonHandler.bind(this, i)
                      changed={(event) => this.nameChangeHandler(event, person.id)} 
                      />
            })}

          </div>
      );
      style.backgroundColor = 'red';

    }

    const classes = [];

    if ( this.state.persons.length <= 2) {
      classes.push('red');
    }
    if ( this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi I am a react app </h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button style={style}
        onClick={this.tooglePersonsHandler}>Toogle persons</button>
        { persons }
      </div>
    );
  }
}

export default App;
