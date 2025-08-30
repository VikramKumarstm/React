import { useState } from 'react'
import './App.css'

function App() {
  
  let [modalStatus, setModalStatus] = useState(false);

  return (
    <>
    <button className="en" onClick={() => setModalStatus(true)}>Enquiry Now</button>

      <div className={`modalOverLay ${modalStatus ? 'modalShow' : ''}`}>

        <div className={`modalDiv ${modalStatus ? 'showModalDiv' : ''} `}>

          <h3>Enquiry Now <span onClick={() => setModalStatus(false)}>&times;</span></h3>

        </div>

      </div>
    </>
  )
}

export default App
