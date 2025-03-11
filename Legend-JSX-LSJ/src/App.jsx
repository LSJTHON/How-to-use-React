import './App.css'

const element1 = <h2>Hello, world!</h2>
const element2 = (
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>
)

const language = "JavaScript"

console.log(element1);
console.log(element2);

function App() {

  return (
    <>
      {/* JSX Practices */ }
      <h1>JSX</h1>

      {language}
      <br />
    </>
  )
}

export default App
