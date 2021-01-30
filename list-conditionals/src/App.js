import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'
class App extends Component {
  state = {
    word: '',
    length: 0,
    chars: [],
  }
  lengtOfInputText = ( event ) => {
    this.setState({
      word : event.target.value,
      length : event.target.value.length,
      chars : [...event.target.value]
    });
  }

  deleteChar = ( index ) => {
    let newArray = [...this.state.chars];
    newArray.splice(index,1);
    this.setState({
      word : newArray.join(''), 
      length: newArray.length,
      chars : newArray
    });
  }


  render() {


    let charComponents = null;
    
    if ( this.state.chars.length > 0 ){
      charComponents = (<div>
        {
          this.state.chars.map( (value, index) => {
            return <CharComponent char={value} key={index} click={()=> this.deleteChar(index)}/>
          })
        }
      </div>
      )
    }
    return (
      <div className="App">
        <header className="App-header">
          <input type='text' onChange={(event) => this.lengtOfInputText(event)} value={this.state.word}/>
        </header>
        <p className="App-intro">
          {this.state.length} characters in the input
        </p>
        <ValidationComponent textLength={this.state.length}/>
        {charComponents}
      </div>
    );
  }
}

export default App;
