import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {	
    persons: [
      { name: 'Max', age: 28 }, 
      { name: 'Manu', age: 29 }, 
      { name: 'Stephanie', age: 26 }, 
    ],
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

  nameChangeHandler= ( event ) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 }, 
        { name: event.target.value, age: 29 }, 
        { name: 'Stephanie', age: 26 }, 
      ],
    })
  }
  // better to use bind than arrow functions
  render() {
    // inline styles
    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
    };
    return (
      <div className="App">
        <h1>Hi I am a react app </h1>
        <button style={style}
        onClick={() => this.switchEventHandler('MAXIMILIAN')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchEventHandler.bind(this,'Maxim!!!')}
        changed={this.nameChangeHandler}
        >More things</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
