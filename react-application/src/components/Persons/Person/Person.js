import React, {Component} from 'react';
// import './Person.css';
import classes from './Person.css'
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
// import Radium from 'radium';
import AuthContext from '../../../context/auth-context';
/*
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 1rem;
    text-align: center;
    @media (min-width: 500px) {
    width: 450px;
}`

*/
class Person extends Component {

    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Person.js], getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return {mesage: 'snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Person.js], componentDidUpdate');
        console.log(snapshot);
    }
    render() {
        console.log('[Person.js]');
        /*const style = {
            '@media (min-width: 500px)': {
                width: '450px'
            }
        }*/
        // const rand = Math.random();

        // if (rand > 0.7) {
        //     throw new Error('Somenthing went wrong');
            // }
        return (
            //<div className="Person" style={style}>
            //<StyledDiv>
            // or just React.Fragment || Fragment importing it from react instead of Aux
            <Aux>
                {this.context.authenticated ? <p>authenticated</p> : <p>Please log in</p>}
                    <p onClick={this.props.click} >I'm a {this.props.name} and I am {this.props.age} years old!</p>
                    {/**In children there is any element beetween the open and close tag */}
                    <p key="i2">{this.props.children}</p>
                    <input
                        key="i3"
                        // ref={(inputEl) =>  {this.inputElement = inputEl}}
                        ref = {this.inputElementRef}
                        type="text" 
                        onChange={this.props.changed} 
                        value={this.props.name}/>
            </Aux>
            //</StyledDiv>

                
            // </div>
        )
    }

};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person,classes.Person);


//export default Radium(person);