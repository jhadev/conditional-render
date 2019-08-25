import React from 'react';

const Button = props => {
  // can easily change button bootstrap class color with props
  // as well as the click function
  // as well as the button text

  let size;
  if (props.lg) {
    size = 'btn-lg';
  } else if (props.sm) {
    size = 'btn-sm';
  } else {
    size = '';
  }
  return (
    <button
      className={`m-2 btn btn-${props.color} ${size}`}
      onClick={props.handleClick}>
      {props.text}
    </button>
  );
};

export default Button;
