require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const Person = require('./models/person')

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

app.use(express.static('public'))
app.use(express.json())
morgan.token('request-body', (req, res) => JSON.stringify(req.body))
app.use(morgan(`:method :url :status :res[content-length] - :response-time ms :request-body`))

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/info', (request, response) => {
  const n = phonebook.length
  const currentDate = new Date()
  const bodyContent = `<p>Phonebook has info for ${n} people</p><p>${currentDate}</p>`

  response.send(bodyContent)
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(result => {
    response.json(result)
  })
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

// app.delete('/api/persons/:id', (request, response) => {
//   const id = request.params.id
//   phonebook = phonebook.filter(person => person.id != id)

//   response.status(204).end()
// })

app.delete('/api/persons/:id', (request, response) => {
  Person.findByIdAndDelete(request.params.id)
    .then(result => response.status(204).end())
    .catch(error => next(error))
})

const generateId = () => {
  const MAX = 1000000

  const getRandomInt = () => {
    return Math.floor(Math.random() * MAX)
  }

  return String(getRandomInt(MAX))
}

// const alreadyExist = (name) => {
//   return phonebook.find(person => person.name === name)
// }

app.post('/api/persons', (request, response) => {
  const body = request.body
  const name = body.name
  const number = body.number

  // Validate data
  if (!(name && number)) {
    return response.status(400).json(
      {error: 'name or number is missing'}
    )
  }

  // if (alreadyExist(name)) {
  //   return response.status(400).json(
  //     {error: 'name must be unique'}
  //   )
  // }

  const person = new Person({
    "name": name,
    "number": number
  })

  person.save().then(result => {
    response.json(result)
  })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
