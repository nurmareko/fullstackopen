const Header = (props) => <h1>{props.course}</h1>

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

const Course = ({ course }) => {
  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    </div>
  )
}

export default Course
