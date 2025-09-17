import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("name :",name)
    console.log("password :", password)
  }



  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <div className='input-box'>
          <label>User Name</label>
          <input type="text" onChange={()=> setName(event.target.value)} value={name} />
        </div>
        <div className='input-box'>
          <label>Password</label>
          <input type="password" onChange={()=> setPassword(event.target.value)} value={password} />
        </div>
        <div className='input-box'>
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}

export default App
