import { useState } from "react"
import RenderPersons from "./components/RenderPersons"

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      number: "040-1234567"
    },
    {
      name: "Astrid Noah",
      number: "1337-666"
    },
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const addPerson = () => {
    event.preventDefault()
    const trimedName = newName.trim()

    if (isNameExist(trimedName)) {
      alert(trimedName + " is already added to phonebook")
    }
    else {
      const newPerson = {
        name: trimedName,
        number: newNumber
      }
      setPersons(persons.concat(newPerson))
    }
  }

  const handleNameChange = () => {
    setNewName(event.target.value)
  }

  const isNameExist = (name) => {
    return (
      persons.some(person => person.name === name)
    )
  }

  const handleNumberChange = () => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <RenderPersons persons={persons} />
    </div>
  )
}

export default App
