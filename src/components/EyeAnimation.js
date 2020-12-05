import React, { Component } from 'react'

class EyeAnimation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      words: [
        {wordSun: 'Sun'},
        {wordRa: 'Ra'},
        {theMan: 'is the Man'}
      ]
    }
  }

  render() {
    const { wordSun } = this.state.words[0]
    const { wordRa } = this.state.words[1]
    const { theMan } = this.state.words[2]
    const text = `${wordSun} ${wordRa} ${theMan}`
    return (
      <div className="Eye">
        <div className="Eye-view-port" onLoad={this.changeColor}>
          <div className="Eye-cylon-eye"><p id="eye">{text}</p></div>
        </div>
      </div>
    )
  }
}

export default EyeAnimation
