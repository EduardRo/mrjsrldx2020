import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = (props) => {
  return (
    <div className='card-list'>
      {props.monsters.map((monster, index) => {
        return (
          <div key={index}>
            <Card name={monster.name} email={monster.email} id={monster.id} />
          </div>
        );
      })}
    </div>
  );
};
