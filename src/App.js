import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  state = {
    count: 0,
    time: null,
  }
  componentDidMount() {
    setInterval(() => {
      let time = new Date().toLocaleString();
      this.setState({
        time
      })
    }, 1000);
  }
  countUp = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    return (
      <div className='container'>        
        <p className='timer'>{this.state.time}</p>
      </div>
    )
  }
}
