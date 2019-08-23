import React, { useState, useEffect } from 'react';

const Year = props => {
  console.log(props);
  const [year, setYear] = useState(0);

  // this effect depends on the props passed down from above. It will run everytime they change.
  // when the button is pressed they year in the state of this component will be updated to reflect the changes and display that on the page.
  useEffect(() => {
    setYear(props.yearBorn + props.age);
  }, [props.age, props.yearBorn]);

  return <h1>The Year is: {year}</h1>;
};

export default Year;
