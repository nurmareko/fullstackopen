import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
    },
    {
      name: "Astrid Noah",
    },
  ])
  const [newName, setNewName] = useState("")

  const addPerson = () => {
    event.preventDefault()
    const newPerson = {
      name: newName
    }

    setPersons(persons.concat(newPerson))
  }

  const handleNameChange = () => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  )
}

export default App
