import React, {Component} from 'react';
import './App.css';

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  _getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
  }

  render() {
    return (
      <div className="clock">
        <div>{this.state.days}</div>
        <div>{this.state.hours}</div>
        <div>{this.state.minutes}</div>
        <div>{this.state.seconds}</div>
      </div>
    )
  }
}

export default Clock;
