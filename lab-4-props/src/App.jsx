



import Student from "./Student"
function App() {
  const students = [
    {name: "Rong bien",age: 19},
    {name: "Lam ne", age: 19}
  ]

  return (
    <>
    {
      students.map(data => (
        <Student name={data.name} age={data.age}/>
      ))
    }
    </>
  )
}

export default App
