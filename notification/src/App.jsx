
import './App.css'
import { ToastContainer, toast } from 'react-toastify';


function App() {

  const notify = () => {
    toast.info("Something went wrong!!!")
  }

  const notifySuccess = () => {
    toast.success("Form submitted successfully.")
  }

  return (
    <div className='app'>
      <h1>Working on React Notification</h1>
      <button onClick={notify}>Submit</button>
      <button onClick={notifySuccess}>Submit</button>
      <ToastContainer />
    </div>
  )
}

export default App
