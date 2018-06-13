import React from 'react';

export class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {time: new Date().toLocaleTimeString()}

  }
  componentDidMount() {
    setInterval(
      ()=> {this.tick(), 1000}
    );
  }


  tick() {
    this.setState ({time: new Date().toLocaleTimeString()})

  }
  render() {
    return <h1> The current time now is {this.state.time}</h1>
 }
}
