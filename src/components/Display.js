import React from 'react';

const Display = props => {
  const currentYear = props.age + props.yearBorn;
  return (
    <>
      <h1>Hello, {props.name}</h1>
      <h1>Age: {props.age}</h1>
      <h1>The year is: {currentYear}</h1>
      <div>{props.children}</div>
    </>
  );
};

export default Display;
