import { useState } from "react";
import "./App.css";

function App() {
  let [formData, setFormData] = useState({
    uname: "",
    uemail: "",
    unumber: "",
    umessage: "",
    index: "",
  });

  let [userData, setUserData] = useState([]);

  const getValue = (event) => {
    let oldData = { ...formData };
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  const handleSubmit = (event) => {
    let currentUserFormData = {
      uname: formData.uname,
      uemail: formData.uemail,
      unumber: formData.unumber,
      umessage: formData.umessage,
    };

    const checkFilterUser = userData.filter(
      (value) =>
        value.uemail === formData.uemail || value.unumber === formData.unumber
    );

    if (checkFilterUser.length === 1) {
      alert("Email or Phone already Exists!");
    } else {
      const oldUserData = [...userData, currentUserFormData];
      setUserData(oldUserData);
      console.log(oldUserData);

      setFormData({
        uname: "",
        uemail: "",
        unumber: "",
        umessage: "",
        index: "",
      });

      event.preventDefault();
    }
  };

  const deleteRow = (indexNumber) => {
    const filterUserData = userData.filter((v, i) => i !== indexNumber)

    setUserData(filterUserData)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <label>User Name</label>
          <input
            type="text"
            name="uname"
            onChange={getValue}
            value={formData.uname}
          />
        </div>
        <div className="input-box">
          <label>Email</label>
          <input
            type="email"
            name="uemail"
            onChange={getValue}
            value={formData.uemail}
          />
        </div>
        <div className="input-box">
          <label>Number</label>
          <input
            type="tel"
            name="unumber"
            onChange={getValue}
            value={formData.unumber}
          />
        </div>
        <div className="input-box">
          <label>Message</label>
          <textarea
            rows={6}
            name="umessage"
            onChange={getValue}
            value={formData.umessage}
          />
        </div>
        <div className="input-box">
          <button>{formData.index !== "" ? "Update" : "Save"}</button>
        </div>
      </form>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.length >= 1 ? (
            userData.map((obj, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{obj.uname}</td>
                  <td>{obj.uemail}</td>
                  <td>{obj.unumber}</td>
                  <td>{obj.umessage}</td>
                  <td className="action">
                    <button onClick={() => deleteRow(i)}>Delete</button>
                    <button>Edit</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={6}>No Data Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
