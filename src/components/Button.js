import React from 'react';


function Button(props) {
    console.log(props)
    return(
        <input
            type="button"
            onClick={() => props.handleClick(props.src)}
            value={props.val}
        />
    );
}

export default Button;
