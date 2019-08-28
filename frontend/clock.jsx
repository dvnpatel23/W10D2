
import React from 'react';
import ReactDOM from "react-dom";


 class Clock extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    currentTime: new Date()  
    }
    

  }

  componentDidMount() {
    this.intervalHandler = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandler);
    this.intervalHandler = 0;
  }
  
  render() {
    return (
      <div className="clock">
        <h1>
          Time: {this.getCurrentTime()}
        </h1>

        <h1>
          Date: {this.state.currentTime.toDateString()}
        </h1>
      </div>
    );
  }

  getCurrentTime() {
    let hours = this.state.currentTime.getHours();
    let minutes = this.state.currentTime.getMinutes();
    let seconds = this.state.currentTime.getSeconds();
    return `${hours}:${minutes}:${seconds}`
  }

  tick() {
    this.setState ({currentTime: new Date() })
  }
   

}

export default Clock;


