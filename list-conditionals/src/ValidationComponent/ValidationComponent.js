import React from 'react';

const ValidationComponent = ( props ) => {

    let text;

    if ( props.textLength < 5) {
        text = 'Text too short'
    }
    else if ( props.textLength >=5 ) {
        text = 'Text long enough'
    }

    return (
      <p>
          {text}
      </p>  
    );
}



export default ValidationComponent;