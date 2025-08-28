import { useState } from 'react'
import './App.css'

function App() {

  let [show, setShow] = useState(false)
  let temp=''

  if(show) {
    temp=<>
      <button onClick={() => setShow(!show)}>Hide</button>
      <p>Welcome to my site</p>
    </>
  }
  else {
    temp= <button onClick={() => setShow(!show)}>Show</button>
  }


  return (
    <>
      <h1>Welcome to the vikram</h1>
      {temp}
    </>
  )
}

export default App
