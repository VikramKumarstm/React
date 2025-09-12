import { useState } from 'react';
import './App.css'

function App() {

  let [todolist, setTodolist] = useState([])
  
  let saveToDoList = (event) => {
    
    let todoname= event.target.todoname.value;

    if(!todolist.includes(todoname)) {

      let finalTodolist = [...todolist, todoname]
      setTodolist(finalTodolist)

    } else {
      alert("ToDo name allready exists.")
    }

    event.preventDefault();

  }

  let list = todolist.map((value, i) => {
    return (

      <ToDoListItems value={value} key={i}/>

    )
  })

  return (
    <div className='App'>
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type='text' name='todoname' /> <button>Save</button>
      </form>

      <div className="outerDiv">
        <ul>
          {list}
        </ul>
      </div>
    </div>
  )
}

export default App

function ToDoListItems({value}) {
  return (
    <li>{value}<span>&times;</span></li>
  )
}
