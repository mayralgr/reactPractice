import React from 'react';
// import './Person.css';
import classes from './Person.css'
// import Radium from 'radium';

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
const person = (props) => {
    /*const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }*/
    return (
        //<div className="Person" style={style}>
        //<StyledDiv>
        <div className={classes.Person}>
            <p onClick={props.click} >I'm a {props.name} and I am {props.age} years old!</p>
            {/**In children there is any element beetween the open and close tag */}
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        //</StyledDiv>

            
        // </div>
    )
};

export default person;


//export default Radium(person);