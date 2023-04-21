/* eslint-disable react/button-has-type */
// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    this.setState(prevState => {
      if (prevState.speed < 200) {
        return {speed: prevState.speed + 10}
      }
    })
  }
  break = () => {
    this.setState(prevState => {
      if (prevState.speed > 0) {
        return {speed: prevState.speed - 10}
      }
    })
  }
  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading"> SPEEDOMETER </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="counter"> Speed is {speed}mph</h1>
        <p className="paragraph"> Min Limit is 0mph, Max Limit is 200mph </p>
        <div className="buttonsContainer">
          <button className="accelerate" onClick={this.accelerate}>
            Apply Accelerate
          </button>
          <button className="break" onClick={this.break}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
