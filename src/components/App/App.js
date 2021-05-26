import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../../api-calls';
import Reservations from '../Reservations/Reservations.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: '',
    }
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

        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
