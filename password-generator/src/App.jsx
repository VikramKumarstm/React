import { useState } from 'react'
import './App.css'
import { LChar, NChar, SChar, UChar } from './data/passChar'

function App() {

  const [passLength, setPassLength] = useState(10)
  const [uppercase, setUppercase] = useState(false)
  const [lowercase, setLowercase] = useState(false)
  const [number, setNumber] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const [finalPassword, setFinalPassword] = useState('')

  const createPassword = () => {
    let charSet = ''
    let finalPassword = ''
    if(uppercase || lowercase || number || symbol) {

      if(uppercase) charSet += UChar
      if(lowercase) charSet += LChar
      if(number) charSet += NChar
      if(symbol) charSet += SChar

      // console.log(charSet.length)

      for(let i=0; i<passLength; i++) {
        // console.log(charSet.charAt(Math.floor(Math.random()*charSet.length)))
        finalPassword += charSet.charAt(Math.floor(Math.random()*charSet.length))
      }

      setFinalPassword(finalPassword)
      
    } else {
      alert("Please Select atleast one checkbox!!!")
    }
  }

  const copyPassword = () => {
    navigator.clipboard.writeText(finalPassword)
  }

  return (
    <div className='app'>
      <div className='container'>
        <h2>Generate Password</h2>
        <div className="passBox">
          <input type="text" readOnly value={finalPassword} />
          <button onClick={copyPassword}>copy</button>
        </div>
    
        <div className='addFeature'>
          <label>Password Length</label>
          <input type="number" min={10} max={20} value={passLength} onChange={(event) => setPassLength(event.target.value)} />
        </div>
        <div className='addFeature'>
          <label>Include Uppercase letters</label>
          <input type="checkbox" checked={uppercase} onChange={()=> setUppercase(!uppercase)} />
        </div>
        <div className='addFeature'>
          <label>Include Lowercase letters</label>
          <input type="checkbox" checked={lowercase} onChange={()=> setLowercase(!lowercase)} />
        </div>
        <div className='addFeature'>
          <label>Include Numbers</label>
          <input type='checkbox' checked={number} onChange={()=> setNumber(!number)} />
        </div>
        <div className='addFeature'>
          <label>Include Symbols</label>
          <input type="checkbox" checked={symbol} onChange={()=> setSymbol(!symbol)} />
        </div>
        <div className="genButton">
          <button onClick={createPassword}>Generate Password</button>
        </div>
      </div>
    </div>
  )
}

export default App
