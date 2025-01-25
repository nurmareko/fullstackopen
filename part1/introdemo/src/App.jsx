const Hello = (props) => {
  console.log(props)
  return (
    <>
      <p>Hello {props.name} you are {props.age} years old</p>
    </>
  )
}

const Footer = () => {
  return (
    <>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)
  const name = 'Devil'
  const age = 666
  const friends = ['Peter','Maya']

  return (
    <>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name='John' age={1+2} />
      <Hello name='Harvard' age={a+b} />
      <Hello name={name} age={age} />
      <Footer />
      <p>{friends}</p>
    </>
  )
}

export default App
