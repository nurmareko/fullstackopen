import { useState } from 'react'

const Heading = ({ text }) => <h2>{text}</h2>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Heading text='give feedback' />
      <Heading text='statistics' />
    </div>
  )
}

export default App
