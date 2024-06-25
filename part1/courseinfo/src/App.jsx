const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>Course Name: {props.parts.name} - Number of Exercises: {props.parts.exercises}</p>
    </>
  )

}

const Content = (props) => {
  return (
    <div>
      <Part parts={props.parts[0]}/>
      <Part parts={props.parts[1]}/>
      <Part parts={props.parts[2]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises: {props.total}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  }

  const totalExercises = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total total={totalExercises}/>
    </div>
  )
}

export default App
