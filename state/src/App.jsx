import { useState } from 'react';
import './App.css'

function App() {

  let [count, setCount] = useState(0);

  let countData = () => {
    setCount(count+1);
  }
  

  return (
    <>
      <h1>Working on State</h1>
      <button onClick={countData}>Count</button>
      {count}
    </>
  )
}

export default App
