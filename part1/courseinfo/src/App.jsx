const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course} />
      <Content
        part1={part1} numExercise1={exercises1}
        part2={part2} numExercise2={exercises2}
        part3={part3} numExercise3={exercises3}
      />
      <Total totalExercise={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.courseName}</h1>
    </>
  )
}

const Content = (props) => {
 return (
   <>
     <Part part={props.part1} numExercise={props.numExercise1} />
     <Part part={props.part2} numExercise={props.numExercise2} />
     <Part part={props.part3} numExercise={props.numExercise3} />
   </>
 )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.numExercise}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.totalExercise}</p>
    </>
  )
}

export default App
