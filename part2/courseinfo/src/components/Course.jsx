const Header = (props) => <h2>{props.course}</h2>

const Content = ({ parts }) => {
  const render = (part) => {
    return (
      <p key={part.id}>
        {part.name} {part.exercises}
      </p>
    )
  }

  return (
    parts.map(render)
  )
}

const Total = ({ parts }) => {
  const plus = (acc, rest) => acc + rest.exercises

  return (
    <p>
      <strong>
        Total of {parts.reduce(plus, 0)} exercises
      </strong>
    </p>
  )
}

const Course = (course) => {
  return (
    <div key={course.id}>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course
