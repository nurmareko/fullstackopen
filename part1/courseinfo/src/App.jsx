const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header courseName={course} />
      <Content
        part1={part1.name} numExercise1={part1.exercises}
        part2={part2.name} numExercise2={part2.exercises}
        part3={part3.name} numExercise3={part3.exercises}
      />
      <Total totalExercise={part1.exercises + part2.exercises + part3.exercises} />
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
