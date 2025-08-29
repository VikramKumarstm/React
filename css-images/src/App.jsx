import './App.css'
import Header from './Header'
import myimage from './assets/vikram.jpeg'

function App() {


  return (
    <>
      <Header />
      <img height={400} src={myimage} alt="img" />
    </>
  )
}

export default App
