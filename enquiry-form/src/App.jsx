
import { useState } from 'react'
import './App.css'

function App() {

    let [formData, setFormData] = useState(
      {
        uname: '',
        uemail: '',
        unumber: '',
        umessage: '',
        index: ''
      }
    )

    let [userData, setUserData] = useState([])

    const getValue = (event) => {
      let oldData = {...formData}
      let inputName = event.target.name
      let inputValue = event.target.value
      oldData[inputName] = inputValue
      setFormData(oldData)
    }

    const handleSubmit = (event) => {

      let currentUserFormData = {
        uname: formData.uname,
        umail: formData.uemail,
        unumber: formData.unumber,
        umessage: formData.umessage

      }

      const oldUserData = [...userData, currentUserFormData]
      setUserData(oldUserData)
      console.log(oldUserData)

      event.preventDefault();
    }


  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        {userData.length}
        <div className="input-box">
          <label>User Name</label>
          <input type="text" name='uname' onChange={getValue} value={formData.uname} />
        </div>
        <div className="input-box">
          <label>Email</label>
          <input type="email" name='uemail' onChange={getValue} value={formData.uemail} />
        </div>
        <div className="input-box">
          <label>Number</label>
          <input type="tel" name='unumber' onChange={getValue} value={formData.unumber} />
        </div>
        <div className="input-box">
          <label>Message</label>
          <textarea rows={6} name='umessage' onChange={getValue} value={formData.umessage} />
        </div>
        <div className="input-box">
          <button>
            {formData.index !== '' ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
