import React, { Component } from 'react';
import Clock from './Clock'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    }
  }

  _changeDeadline() {
    this.setState({deadline: this.state.newDeadline})
  }

  render() {
    return (
      <div className='app'>
        <h2>Countdown to {this.state.deadline}</h2>
        <Clock deadline={this.state.deadline}/>
        <div>
          <input onChange={event => this.setState({newDeadline: event.target.value})} placeholder='new date' type="text"/>
          <button onClick={() => this._changeDeadline()}>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
