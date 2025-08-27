import { useState } from 'react'
import './App.css'

function App() {

  const [showPassword, setShowPassword] = useState(false)
  

  return (
    <>
      <h1>Show/Hide Password</h1>
      <p>Enter password</p>
      <input 
        type={
          (showPassword) ? 'text' : 'password'
        }
        name="" id="" 
      />
      <button 
      onClick={() => setShowPassword(!showPassword)}
      >
        {
          (showPassword) ? 'Hide' : 'Show'
        }
      </button>
    </>
  )
}

export default App
