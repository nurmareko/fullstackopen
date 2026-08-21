const mongoose = require('mongoose')

const argvCount = process.argv.length

// Case: saving data
if (argvCount === 3) {
  console.log('displaying all data in database')
  process.exit(0)
}

// Case: display all data
if (argvCount === 5) {
  console.log('saving new data to database')
  process.exit(0)
}

// Case: invalid argument
console.log('invalid argument')
process.exit(1)
