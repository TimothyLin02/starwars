import React from 'react';


function Button(props) {
    console.log(props)
    console.log(props.handleClick)
    return(
        <input
            type="button"
            onClick={() => props.handleClick(props.src)}
            value={props.val}
        />
    );
}

export default Button;
