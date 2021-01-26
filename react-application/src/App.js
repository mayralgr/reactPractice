import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
    /**
    State just exist in components
   */
  state = {
    persons: [
      { name: 'Max', age: 28 }, 
      { name: 'Manu', age: 29 }, 
      { name: 'Stephanie', age: 26 }, 
    ],
    otherStat: 'some othe values'
  }

  switchEventHandler = () => {
    // console.log('WAS CLICK');
    // Dont do this this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 }, 
        { name: 'Manu', age: 29 }, 
        { name: 'Stephanie', age: 27 }, 
      ],
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi I am a react app </h1>
        <button onClick={this.switchEventHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>More things</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
