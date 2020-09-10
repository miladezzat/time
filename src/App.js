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
  render() {
    return (
      <div className='container'>        
        <p className='timer'>{this.state.time}</p>
      </div>
    )
  }
}
