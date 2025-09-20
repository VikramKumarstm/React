import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    event.preventDefault();

    let currentUserFormData = {
      uname: formData.uname,
      uemail: formData.uemail,
      unumber: formData.unumber,
      umessage: formData.umessage,
    };

    if (formData.index === "") {
      const checkFilterUser = userData.filter(
        (value) =>
          value.uemail === formData.uemail || value.unumber === formData.unumber
      );

      if (checkFilterUser.length >= 1) {
        toast.error("Email or Phone already exists");
      } else {
        const oldUserData = [...userData, currentUserFormData];
        setUserData(oldUserData);
        toast.success("User Added Successfully");
        console.log(oldUserData);

        setFormData({
          uname: "",
          uemail: "",
          unumber: "",
          umessage: "",
          index: "",
        });
      }
    } else {
      let editIndex = formData.index;
      let oldData = userData;

      const checkFilterUser = userData.filter(
        (value, i) =>
          ((value.uemail === formData.uemail ||
            value.unumber === formData.unumber) &&
          i !== editIndex)
      );

      if (checkFilterUser.length == 0) {
        oldData[editIndex]["uname"] = formData.uname;
        oldData[editIndex]["uemail"] = formData.uemail;
        oldData[editIndex]["unumber"] = formData.unumber;
        oldData[editIndex]["umessage"] = formData.umessage;

        setUserData(oldData);

        setFormData({
          uname: "",
          uemail: "",
          unumber: "",
          umessage: "",
          index: "",
        });
      } else {
        toast.error("Email or Phone already exists");
      }
    }
  };

  const deleteRow = (indexNumber) => {
    const filterUserData = userData.filter((v, i) => i !== indexNumber);
    toast.success("User Deleted Successfully");
    setUserData(filterUserData);
  };

  const editRow = (indexNumber) => {
    const editData = userData.filter((v, i) => i === indexNumber)[0];
    // console.log(editData)
    editData["index"] = indexNumber;
    // console.log(editData)
    setFormData(editData);
  };

  return (
    <div className="App">
      <ToastContainer />
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
                    <button onClick={() => editRow(i)}>Edit</button>
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
