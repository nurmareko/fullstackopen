import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import Notification from "./components/Notification"
import personService from "./services/Persons"
import Persons from "./components/Persons"
import PersonsForm from "./components/PersonsForm"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newData, setNewData] = useState({ name: "", number: "" })
  const [nameFilter, setNameFilter] = useState("")
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const addPerson = () => {
    event.preventDefault()
    const trimedName = newData.name.trim()


    if (!isValidNumber(newData.number)) {
      alert(newData.number + " is not a valid number")
    }
    else if (!isAlpha(trimedName)) {
      alert(trimedName + " is not a valid name")
    }
    else if (isNameExist(trimedName)) {
      const message = `${trimedName} is already added to phonebook, replace the old number with a new one?`
      if (confirm(message)) {
        const initialData = persons.find(person => person.name === trimedName)
        const updatedData = {
          ...initialData,
          number: newData.number
        }

        personService
          .replace(updatedData)
          .then(returnedPerson => setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person)))
          .catch(error => {
            setNotification({ message: `information of ${trimedName} has already been removed from server`, type: 'error' })
            setPersons(persons.filter(person => person.name !== trimedName))
          })

        setNotification({ message: `${updatedData.name} phone number is updated`, type: 'success' })
      }
    }
    else {
      const newPerson = {
        name: trimedName,
        number: newData.number,
      }

      personService
        .create(newPerson)
        .then(returnedPerson => setPersons(persons.concat(returnedPerson)))

      setNotification({ message: `Added ${newPerson.name}`, type: 'success' })
    }
    setTimeout(() => setNotification(null), 5000)
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
      personService
        .erase(person)
        .then(returnedPerson => setPersons(persons.filter(person => person.id !== returnedPerson.id)))
    }
  }

  const personsToShow = nameFilter === "" ? persons : persons.filter(isHaveName)

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notificationState={notification} />
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
