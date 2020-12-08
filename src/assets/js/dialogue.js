

const whatsYourSign = () => {
  const signTarget = document.getElementById('sign')
  const signQuestion = 'What\'s your sign?'
  signTarget.innerHTML = signQuestion
  let sign = '' //input from form
  if (sign.toLowerCase() !== null) {
    signTarget.innerHTML = `Cool. So, you say your sign is {sign}. Have you always been an asshole?`
  } else {
    alert(`Yeah, I wouldn't answer that question either.<br><br>Dickheads.`)
  }
}
