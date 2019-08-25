import React from 'react';

const Card = props => {
  return (
    <div className={`card mt-2 ${props.dark ? 'bg-dark' : 'bg-light'}`}>
      {props.header && <div className="card-header">{props.header}</div>}
      <div className="card-body">{props.children}</div>
    </div>
  );
};

export default Card;
