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

  componentWillMount() {
    this._getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this._getTimeUntil(this.props.deadline), 1000);
  }

  _leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  _getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));
    this.setState({days, hours, minutes, seconds})
  }

  render() {

    return (
      <div className="clock">
        <div>{this._leading0(this.state.days)} Days</div>
        <div>{this._leading0(this.state.hours)} Hours</div>
        <div>{this._leading0(this.state.minutes)} Minutes</div>
        <div>{this._leading0(this.state.seconds)} Seconds</div>
      </div>
    )
  }
}

export default Clock;
