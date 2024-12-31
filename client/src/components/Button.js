import React from 'react';

import {useNavigate } from 'react-router-dom';

function Button(props){
    
    const {text = 'This is default text'} = props;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.link);
    };
    
    return(
      <button onClick={handleClick}> {text} </button>      
    );
  }

export default Button;