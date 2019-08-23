import React from 'react';

const Container = props => {
  return (
    <div className={`container${props.fluid ? '-fluid' : ''}`}>
      <div {...props}>{props.children}</div>
    </div>
  );
};

export default Container;
