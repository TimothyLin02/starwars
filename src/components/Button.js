import React from 'react';
//import Button from 'react-bootstrap/Button';
//import { Button } from 'react-bootstrap';

function Button(props) {
    console.log(props)

    return(
        <input
            type="button"
            class="btn btn-dark"
            //variant="outline-info"
            onClick={() => props.handleClick(props.src)}
            value={props.val}   
        />
    );
}

export default Button;
