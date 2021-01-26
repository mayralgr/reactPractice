import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 }, 
      { name: 'Manu', age: 29 }, 
      { name: 'Stephanie', age: 26 }, 
    ],
    otherStat: 'some othe values'
  });
  

  const switchEventHandler = () => {
    // console.log('WAS CLICK');
    // Dont do this personState.persons[0].name = 'Maximilian';

    // does not merge the object or array
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 }, 
        { name: 'Manu', age: 29 }, 
        { name: 'Stephanie', age: 27 }, 
      ],
      otherStat: persons.otherStat,
    })
  }
  //return() {
    return (
      <div className="App">
        <h1>Hi I am a react app </h1>
        <button onClick={switchEventHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>More things</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );
  //}
}

export default app;
