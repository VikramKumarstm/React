import {  } from 'react'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  let [counter, setCouter] = useState(1)

  useEffect(() => {
    console.log("Hello Vikram")
  }, [counter])

  const changeCounter = () => {
    setCouter(counter++)
  }

  return (
    <div className='app'>
      <h1>Use Effect Hook</h1>
      {counter}
      <button onClick={changeCounter}>Count</button>
    </div>
  )
}

export default App
