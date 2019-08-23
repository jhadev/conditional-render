import React, { useState, useEffect } from 'react';

const Year = props => {
  console.log(props);
  const [year, setYear] = useState(0);

  // const setTheYear = year - props.age;

  useEffect(() => {
    setYear(props.yearBorn + props.age);
  }, [props.age, props.yearBorn]);

  return <h1>The Year is: {year}</h1>;
};

export default Year;
