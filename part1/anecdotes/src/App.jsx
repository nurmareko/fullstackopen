import { useState } from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)

  return (
    Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const length = anecdotes.length

  const [selected, setSelected] = useState(getRandomInt(0, length))
  const [votes, setVotes] = useState(Array(length).fill(0))

  const handleRandom = () => {
    let random

    do {
      random = getRandomInt(0, length)
    } while (random == selected)


    return (
      setSelected(random)
    )
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected]++

    return (
      setVotes(copy)
    )
  }

  return (
    <div>
      {anecdotes[selected]}
      <br/>
      has {votes[selected]} votes
      <br/>
      <Button text='vote' onClick={handleVote} />
      <Button text='next anecdote' onClick={handleRandom} />
    </div>
  )
}

export default App
