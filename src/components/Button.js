import React from 'react';

const Button = props => {
  // can easily change button bootstrap class color with props
  // as well as the click function
  // as well as the button text
  return (
    <button
      className={`btn btn-${props.color} btn-lg m-2`}
      onClick={props.handleBirthday || props.fountainOfYouth}>
      {props.handleBirthday
        ? `It's My Birthday`
        : `Drink From The Fountain Of Youth`}
    </button>
  );
};

export default Button;
