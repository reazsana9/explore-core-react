
import './App.css'

function App() {

  return (
    <>
      <h1>React Core concepts</h1>
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Mozumder" tech="js"></Developer>
      <Developer name="Rajon" tech="python"></Developer>
      <Developer name="Shabana" tech="java"></Developer>
      <Player name="tamim" runs="5000"></Player>
      <Player name="mushi" runs="5000"></Player>
      <Salami event="Roja Eid" amount="20"></Salami>
      <Salami event="Graduation"></Salami>
    </>
  )
}

function Salami({ event, amount = 0}) {
  return (
    <div className='student'>
      <p>Salami For: {event}</p>
      <p>Amount: {amount}</p>
    </div>
  )
}

// const {name, runs} = {name: 'tamim', runs: '5000'}
function Player({ name, runs }) {
  return (
    <div className='student'>
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  )
}

// const {name, tech} = {name: 'Mozumder', tech: 'JS'}

function Developer(props) {
  console.log(props);

  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}

function Person() {
  const age = 17;
  const name = 'jolil';

  const personStyle = {
    color: 'red',
    textAlign: 'left'
  }

  return (
    <p id='' title='tooltip' style={personStyle}>I am a Person: {name} {age}</p>
  )
}

function Student() {
  return (
    <div className='student'>
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}

function Pet() {
  return (
    <p>Cat</p>
  )
}

function Sports() {
  return (
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
