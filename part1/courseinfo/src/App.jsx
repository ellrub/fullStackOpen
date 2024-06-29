const Header = (props) => {
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
      <Part parts={props.parts}/>
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

  const totalExercises = part1.exercises + part2.exercises + part3.exercises

  return (
    <div>
      <Header course={course} />
      <Content parts={part1}/>
      <Content parts={part2}/>
      <Content parts={part3}/>
      <Total total={totalExercises}/>
    </div>
  )
}

export default App
