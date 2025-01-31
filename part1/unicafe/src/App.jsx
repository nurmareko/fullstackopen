import { useState } from 'react'

const Heading = ({ text }) => (
  <h2>{text}</h2>
)

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
)

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
      <Button text='good' onClick={handleGood}/>
      <Button text='neutral' onClick={handleNeutral}/>
      <Button text='bad' onClick={handleBad}/>
      <Heading text='statistics' />
    </div>
  )
}

export default App
