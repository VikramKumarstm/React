import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hi Vikram</h1>
      <div className='container'>
        <h1 className='text-danger'>Welcome to home page</h1>
      </div>
      <Card />
    </>
  )
}

export default App
