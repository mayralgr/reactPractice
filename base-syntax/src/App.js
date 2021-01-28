import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName: 'Luz'
  }
  
  nameHandler = ( event ) => {
    this.setState({
      userName: event.target.value
    });
  }
  render() {
    // inline styles
    const style = {
      backgroundColor: 'white',
      font:'inherit',
      width: '100%',
      padding: '8px',
    };
    return (
      <div className="App">
       <UserInput style={style}
       change={this.nameHandler} name={this.state.userName}/>
       <UserOutput name={this.state.userName}/>
       <UserOutput name={this.state.userName}/>
       <UserOutput name={this.state.userName}/>
       <UserOutput name={this.state.userName}/>
      </div>
    );
  }
}

export default App;
