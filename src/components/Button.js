import React from 'react';

const Button = props => {
  // can easily change button bootstrap class color with props
  // as well as the click function
  // as well as the button text
  return (
    <button
      className={`btn btn-${props.color} btn-lg m-2`}
      disabled={props.disabled}
      onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

export default Button;
