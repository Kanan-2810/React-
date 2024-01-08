import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {

let [counter , setCounter] = useState(15)
  const addValue = ()=>
  {
    if(counter<20){
      setCounter(counter + 1)
    }
    else
    {
    setCounter(counter)
    }
  }
  const removeValue = ()=>
  {
    if(counter>0){
      setCounter(counter - 1)
    }
    else
    {
    setCounter(counter)
    }
  }
  return (
    <>
    <>Click Me:</>
    <button onClick={addValue}>addValue:{counter}</button>
    <button onClick={removeValue}>removeValue:{counter}</button>
    </>
  )
}

export default App
