import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: 0,
    }
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
        />

        <input
          type='text'
          placeholder='Date'
          name='date'
          value={this.state.date}
        />

        <input
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
        />

        <input
          type='text'
          placeholder='Number of guests'
          name='guests'
          value={this.state.guests}
        />

        <button>SUBMIT</button>
      </form>
    )
  }
}

export default Form;
