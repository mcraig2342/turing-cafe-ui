import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../../api-calls';
import Reservations from '../Reservations/Reservations.js';
import Form from '../Form/Form.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: '',
    }
    this.addReservation = this.addReservation.bind(this);
  }

  addReservation(newReservation) {
    this.setState({ reservations: [...this.state.reservations, newReservation] });
  }

  componentDidMount() {
    getReservations()
    .then(currentReservations => {
      this.setState({reservations: currentReservations})
    })
    .catch(error => this.setState({ error: 'Something went wrong!'}))
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
