const mongoose = require('mongoose')

const argvCount = process.argv.length

// Case: invalid argument
if (!(argvCount === 3 || argvCount === 5)) {
  console.log('invalid argument')
  process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://dnurmareko_db_user:${password}@cluster0.4g04zzv.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`
mongoose.set('strictQuery',false)
mongoose.connect(url, { family: 4 })

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', phonebookSchema)

// Case: displaying all data
if (argvCount === 3) {
  console.log('displaying all data in database')
  process.exit(0)
}

// Case: saving data
if (argvCount === 5) {
  console.log('saving new data to database')

  const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
  })

  person.save().then(result => {
    console.log('person saved!')
    mongoose.connection.close()
  })
}
