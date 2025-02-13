const Header = (props) => <h1>{props.course}</h1>

const Course = ({ course }) => {
  return (
    <div>
    <Header course={course.name} />
    </div>
  )
}

export default Course
