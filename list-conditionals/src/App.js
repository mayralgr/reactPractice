import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'
class App extends Component {
  state = {
    word: '',
  }
  inputChangeHandler = ( event ) => {
    this.setState({
      word : event.target.value,
    });
  }

  deleteChar = ( index ) => {
    let newArray = [...this.state.word];
    newArray.splice(index,1);
    this.setState({
      word : newArray.join('')
    });
  }


  render() {
    let charComponents = null;
    
    if ( this.state.word.length > 0 ){
      charComponents = (<div>
        {
          [...this.state.word].map( (value, index) => {
            return <CharComponent 
                    char={value} 
                    key={index} 
                    click={()=> this.deleteChar(index)}/>
          })
        }
      </div>
      )
    }
    return (
      <div className="App">
        <header className="App-header">
          <input type='text' 
          onChange={(event) => this.inputChangeHandler(event)} 
          value={this.state.word}/>
        </header>
        <p className="App-intro">
          {this.state.word.length} characters in the input
        </p>
        <ValidationComponent textLength={this.state.word.length}/>
        { charComponents }
      </div>
    );
  }
}

export default App;
