import './App.css'
import btnModule from './Button.module.css'

function App() {

  return (
    <>
      <h1>Working module styling</h1>
      <button className={btnModule.error}>Error</button>
    </>
  )
}

export default App
