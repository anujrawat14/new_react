import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter, SetCounter] = useState(10);

  const AddValue = () => {
    SetCounter(counter => {
      if (counter < 20) return counter + 1;
      // alert(`counter value cant be greater than 20`)
      return counter;
    })
  }
  const RemoveValue = () => {
    SetCounter(counter => {
      if (counter > 0) return counter - 1;
      // alert('counter value cant be negative')
      return counter;

    })
  }


  return (
    <>
      <h1> CLICK TO CHECK VALUE OF COUNTER </h1>

      <h2>current value of counter : {counter}</h2>
      <button onClick={AddValue} disabled={counter>=20}>
        CLICK ME : ADD VALLUE
      </button>

      <br />

      <button onClick={RemoveValue} disabled={counter<=0}>
        CLICK ME : REMOVE VALLUE
      </button>

      <p> value counter {counter} </p>
    </>
  )
}

export default App
