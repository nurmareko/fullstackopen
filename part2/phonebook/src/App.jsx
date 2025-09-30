import { useState, useEffect } from "react"
import personService from "./services/Persons"
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import PersonsForm from "./components/PersonsForm"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newData, setNewData] = useState({ name: "", number: "" })
  const [nameFilter, setNameFilter] = useState("")

  useEffect(() => {

    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

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
      }

      personService
        .create(newPerson)
        .then(returnedPerson => setPersons(persons.concat(returnedPerson)))
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

  const deletePerson = (person) => {
    if (confirm(`delete ${person.name}?`)) {
      console.log(`the person with ${person.id} will be deleted!`)

      personService
        .erase(person)
        .then(returnedPerson => setPersons(persons.filter(person => person.id !== returnedPerson.id)))
    }
  }

  const personsToShow = nameFilter === "" ? persons : persons.filter(isHaveName)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={nameFilter} onChange={handleNameFilter} />
      <h2>add a new</h2>
      <PersonsForm
        onSubmit={addPerson}
        value={newData}
        onChangeName={handleNameChange}
        onChangeNumber={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        persons={personsToShow}
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App
