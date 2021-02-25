import React, { Component, StrictMode } from 'react';
import classes from'./App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';
class App extends Component {

  constructor(props) {
    super(props)
    console.log('app js constructor');
  }

  state = {	
    persons: [
      { id:'ffsfsf', name: 'Max', age: 28 }, 
      { id:'cabgae', name: 'Manu', age: 29 }, 
      { id:'fwoeoa', name: 'Stephanie', age: 26 }, 
    ],
    showPersons: false,
    showCockpit: true,
    counter: 0,
    authenticated:false
  }
  
  static getDerivedStateFromProps(props,state) {
    console.log('App js getDerivedStateFromProps', props);
    return state;
  }

  switchEventHandler = ( newName ) => {

    this.setState({
      persons: [
        { name: newName, age: 28 }, 
        { name: 'Manu', age: 29 }, 
        { name: 'Stephanie', age: 27 }, 
      ],
    })
  }

  // componentWillMount() {
  //   console.log('will mount ....');
  // }

  componentDidMount() {
    console.log('[app.js] did mount');
  }

  shouldComponentUpdate() {
    console.log('app.js shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('App.js componentDidUpdate');
  }

  loginHandler = () => {
    this.setState({authenticated:true});
  }

  nameChangeHandler= ( event, id ) => {
    const personIndex = this.state.persons.findIndex( person => {
      return person.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // without const person = Object.assign({},this.state.persons[personIndex]);
    this.setState((prevState, props) => {
      return {
        persons: persons,
        change: prevState.counter + 1,
      }
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
    console.log('App js render')
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
                  persons = {this.state.persons}
                  clicked = {this.deletePersonHandler}
                  changed = {this.nameChangeHandler}
                  isAuthenticated = {this.state.authenticated}
                />
    } 

    return (
        <Aux>
          <button onClick={()=> {
            this.setState({showCockpit: false})
          }} > Remove cockpit</button>
          <AuthContext.Provider value={{authenticated: this.state.authenticated, login:this.loginHandler}}>
          {this.state.showCockpit ? 
            <Cockpit 
              title={this.props.appTitle}
              personsLenght={this.state.persons.length}
              showPersons={this.state.showPersons}
              clicked={this.tooglePersonsHandler}
            />
            : null}
            { persons }
          </AuthContext.Provider>
          
        </Aux>
    );
  }
}

export default withClass(App,classes.App);

//export default Radium(App);


/*Lifecylcle
component creation :
constructor(props) --> call super(props)
getDerivedStateFromProps(props,state) ==> each time props change
render() ==> no timeouts, no requests
render child components
componentDidMount() ==> cause side-effects but no update state




*/