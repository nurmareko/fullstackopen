import { useState } from 'react'

const Heading = ({ text }) => (
  <h2>{text}</h2>
)

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
)

const Stat = ({state1, state2, state3 }) => {
  const total = state1 + state2 + state3
  const average = (state1 - state3) / total

  return (
    <p>
      good {state1}<br/>
      neutral {state2}<br/>
      bad {state3}<br/>
      all {total}<br/>
      average {average}<br/>
    </p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Heading text='give feedback' />
      <Button text='good' onClick={handleGood} />
      <Button text='neutral' onClick={handleNeutral} />
      <Button text='bad' onClick={handleBad} />
      <Heading text='statistics' />
      <Stat state1={good} state2={neutral} state3={bad} />
    </div>
  )
}

export default App
