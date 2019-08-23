import React from 'react';

const Year = ({ age, yearBorn }) => (
  // destructure props in the parameter
  <h1>The Year is: {age + yearBorn}</h1>
);

export default Year;
