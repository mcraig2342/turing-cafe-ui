import React from 'react';
import Card from '../Card/reservation-card.js';
import './Reservations.css';

const Reservations = ({ reservations }) => {

  const reservationCards = reservations.map(reservation => {
    return (
      <Card
      name= {reservation.name}
      key= {reservation.id}
      date= {reservation.date}
      guests={reservation.number}
      />
    )
  })

  return (
    <div className= 'area'>
      {reservationCards}
    </div>
  )
}

export default Reservations;
