import React from 'react';
import './Card.css';


const Card =({name, date, time, guests, id}) => {

  return (
    <div className='card' id={id}>
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {guests}</p>
    </div>
  )
}

export default Card;
