import { useState } from 'react'
import './App.css'

function App() {
  
  let [status, setStatus] = useState(false);

  return (
    <>
      <h1>Working on ternary operator</h1>
      <button onClick={() => setStatus(!status)}>
        {
          (status)
          ?
          'Hide'
          :
          'Show'
        }
      </button>
      {
        (status)
        ?
        <p>Welcome to the vikram</p>
        :
        ''
      }

    </>
  )
}

export default App
