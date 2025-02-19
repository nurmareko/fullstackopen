import { useState } from "react"
import Persons from "./components/Persons"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newData, setNewData] = useState({ name: "", number: "" })
  const [nameFilter, setNameFilter] = useState("")

  const addPerson = () => {
    event.preventDefault()
    const trimedName = newData.name.trim()


    if (isNameExist(trimedName)) {
      alert(trimedName + " is already added to phonebook")
    }
    else if (!isAlpha(trimedName)) {
      alert(trimedName + " is not a valid name")
    }
    else if (!isValidNumber(newData.number)) {
      alert(newData.number + " is not a valid number")
    }
    else {
      const newPerson = {
        name: trimedName,
        number: newData.number,
        id: persons.length + 1
      }
      setPersons(persons.concat(newPerson))
    }
  }

  const isAlpha = (str) => {
    return (
      /^[A-Za-z\s]+$/.test(str)
    )
  }

  const isNameExist = (name) => {
    return (
      persons.some(person => person.name === name)
    )
  }

  const isValidNumber = (str) => {
    return (
      /^[0-9-]+$/.test(str)
    )
  }

  const handleNameChange = () => {
    setNewData({ ...newData, name: event.target.value })
  }

  const handleNumberChange = () => {
    setNewData({ ...newData, number: event.target.value })
  }
  const handleNameFilter = () => {
    setNameFilter(event.target.value)
  }

  const isHaveName = (person) => {
    const name = person.name.toLowerCase()
    const filter = nameFilter.toLowerCase()

    return (
      name.includes(filter)
    )
  }

  const personsToShow = nameFilter === "" ? persons : persons.filter(isHaveName)

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input value={nameFilter} onChange={handleNameFilter} />
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newData.name} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newData.number} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App
