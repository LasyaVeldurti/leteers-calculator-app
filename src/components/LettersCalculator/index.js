// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchinput: ''}

  changeSearchInput = event => {
    console.log(event.target.value)
    this.setState({searchinput: event.target.value})
  }

  render() {
    const {searchinput} = this.state
    const count = searchinput.length

    return (
      <div className="bg-container">
        <div className="calculating-container">
          <h1 className="title">Calculate the Letters you enter</h1>
          <label htmlFor="html">Enter the phrase</label>
          <input
            id="html"
            className="input-phrase"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.changeSearchInput}
          />
          <p className="count-button">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
