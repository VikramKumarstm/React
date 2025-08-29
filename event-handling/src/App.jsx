import './App.css'

function App() {

  let displayData = () => {
    alert("Welcome to The Vikram");
  }

  let addData = (a, b) => {
    console.log(a+b);
  }

  return (
    <>
      <h1>Working on Button</h1>
      <button 
      className='btn'
      onClick={displayData}
      >Submit</button>

      <h1>Parameterised method passed to the button</h1>
      <button 
      className='btn'
      onClick={() => addData(20,25)}
      >
        Add Data
      </button>
    </>
  )
}

export default App
