
import { useState } from 'react'
import './App.css'

function App() {

    

  return (
    <div className='App'>
      <form>
        <div className="input-box">
          <label>User Name</label>
          <input type="text" name='name' />
        </div>
        <div className="input-box">
          <label>Email</label>
          <input type="email" name='email' />
        </div>
        <div className="input-box">
          <label>Number</label>
          <input type="tel" name='number' />
        </div>
        <div className="input-box">
          <label>Message</label>
          <textarea rows={6} name='message' />
        </div>
        <div className="input-box">
          <button>Save</button>
        </div>
      </form>
    </div>
  )
}

export default App
