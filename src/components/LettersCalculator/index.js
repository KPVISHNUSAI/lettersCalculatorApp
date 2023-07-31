// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  counter = event => {
    const inputText = event.target.value
    const letterCount = inputText.replace(/[^a-zA-Z]/g, '').length
    this.setState({count: letterCount})
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="inp-container">
          <h1>Calculate the Letters you enter</h1>

          <label htmlFor="textId">Enter the phrase</label>
          <br />
          <input
            id="textId"
            className="input-style"
            placeholder="Enter the phrase"
            onChange={this.counter}
          />
          <div className="output">
            <p>No.of letters: {count}</p>
          </div>
        </div>
        <div className="img-container">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
