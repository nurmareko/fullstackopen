const express = require('express')
const app = express()

app.use(express.json())

let phonebook = [
    {
      "id": "1",
      "name": "Arto Hellas",
      "number": "040-123456"
    },
    {
      "id": "2",
      "name": "Ada Lovelace",
      "number": "39-44-5323523"
    },
    {
      "id": "3",
      "name": "Dan Abramov",
      "number": "12-43-234345"
    },
    {
      "id": "4",
      "name": "Mary Poppendieck",
      "number": "39-23-6423122"
    }
]

app.get('/info', (request, response) => {
  const n = phonebook.length
  const currentDate = new Date()
  const bodyContent = `<p>Phonebook has info for ${n} people</p><p>${currentDate}</p>`

  response.send(bodyContent)
})

app.get('/api/persons', (request, response) => {
  response.json(phonebook)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  person = phonebook.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }

})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  phonebook = phonebook.filter(person => person.id != id)

  response.status(204).end()
})

const generateId = () => {
  const MAX = 1000000

  const getRandomInt = () => {
    return Math.floor(Math.random() * MAX)
  }

  return String(getRandomInt(MAX))
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  // Validate data
  if (!(body.name && body.number)) {
    return response.status(400).json(
      {error: 'invalid data'}
    )
  }

  const person = {
    "id": generateId(),
    "name": body.name,
    "number": body.number
  }
  phonebook = phonebook.concat(person)
  response.json(person)
  console.log(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
