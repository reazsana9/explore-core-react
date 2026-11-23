
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Pet></Pet>
      <Person></Person>
      <Sports></Sports>
      <Person></Person>
      <Person></Person>
      <Sports></Sports>
    </>
  )
}

function Person() {
  const age = 17;
  return (
    <p>I am a Person {age}</p>
  )
}

function Pet(){
  return(
    <p>Cat</p>
  )
}

function Sports(){
  return(
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>Kola</li>
        <li>Komola</li>
      </ul>
      <p>Playing and losing</p>
    </div>
  )
}

export default App
