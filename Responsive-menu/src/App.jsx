import { useState } from 'react'
import './App.css'

function App() {

  const [menu, setMenu] = useState(false)



  return (
    <>
    <button className='micon' onClick={() => setMenu(!menu)}> {menu ? <span>&times;</span> : <span>&#9776;</span>}</button>
      <div className={`menu ${menu ? 'activeMenu' : '' }`}>
        <div className="logo">
          <img src="something" alt="" />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </>
  )
}

export default App
