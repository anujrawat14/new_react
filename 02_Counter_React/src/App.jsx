import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)//default value is 5 it has name counter ,and function setCounter
  // let counter = 5

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  }

  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
  }

  
  return (
    <>
      <h1> project of counter To learn hook use case</h1>

      <h2>counter value:{counter}</h2>

      <button
        onClick={addValue}
      >
        Add Value {counter}
      </button>

      <br />

      <button
        onClick={removeValue} >remove Value {counter}</button>

      <p> footer :{counter}</p>

    </>
  )
}

export default App
