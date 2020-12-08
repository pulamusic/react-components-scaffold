import React, { Component } from 'react';

class Section1 extends Component {
  render() {


    let Sign = () => {
      const whatsYourSign = () => {
        return 'What\'s your sign?'
      }

      let input = document.getElementById('sign-text')

      const answer = (onClick) => {
        const answerAlt1 = `Cool. So that's your sign. . . Have you always been an asshole?`
        const answerAlt2 = `Yeah, I wouldn't answer that question either. . . Dickheads.`
        return !input ? answerAlt2 : answerAlt1
      }
      let what = whatsYourSign()
      let response = answer()
      return what ? response : what
    }

    let sign = Sign()

    return (
      <div className="Section-1">
        <div className="wrapper header">
          <h1>What's yer sign dude?</h1>
        </div>
        <div className="sign">
          <form id="input-form" action="">
            <input type="text" id="sign-text" name="sign-text" placeholder="Please enter your astrological sign." />
            <input className="submit-btn" type="submit" value="Submit" />
            <hr />
          </form>

          <div id="sign">{sign}</div>
        </div>
      </div>
    )
  }
}

export default Section1

/*
let signTarget = document.getElementById('sign')
const signQuestion = 'What\'s your sign?'
signTarget = signQuestion
const answerAlt1 = 'signTarget.innerHTML = `Cool. So, you say your sign is {sign}. Have you always been an asshole?`'
const answerAlt2 = 'signTarget.innerHTML = `Yeah, I wouldn\'t answer that question either.<br /><br />Dickheads.`'
let sign = '' //input from form
return (sign.toLowerCase() !== null) ? signTarget = answerAlt1 : answerAlt2

if (sign.toLowerCase() !== null)
*/

/*
let Text = () => {
  let input = document.getElementById('sign-text')
  const target = document.getElementById('sign')

  const whatsYourSign = () => {
    return target.innerHTML = 'What\'s your sign?'
  }

  const answer = () => {
    const answerAlt1 = 'Cool. So, you say your sign is {sign}. Have you always been an asshole?'
    const answerAlt2 = 'Yeah, I wouldn\'t answer that question either.<br /><br />Dickheads.'
    return input ? target.innerHTML = answerAlt1 : answerAlt2
  }

  return !input ? whatsYourSign() : answer()
}

const answer = () => {
  const answerAlt1 = 'Cool. So, you say your sign is {sign}. Have you always been an asshole?'
  const answerAlt2 = 'Yeah, I wouldn\'t answer that question either.<br /><br />Dickheads.'
  return input ? target.innerHTML = answerAlt1 : answerAlt2
}
*/
