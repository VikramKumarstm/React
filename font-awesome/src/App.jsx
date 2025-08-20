import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <>
      <h1>Home</h1>
      <h1>About</h1>
      <h1>Contact</h1>
      <FontAwesomeIcon icon={faWhatsapp}/>
      <FontAwesomeIcon icon={faPhone}/>
    </>
  )
}

export default App
