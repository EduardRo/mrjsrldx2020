import React from 'react';
import './card.styles.css';

export const Card = (props) => {
  return (
    <div className='card-container'>
      <img
        alt='monster'
        src={`https://robohash.org/${props.id}?set=set4&size=140x200`}
      />
      <h3>{props.name}</h3>
      <p>{props.email}</p>
    </div>
  );
};
