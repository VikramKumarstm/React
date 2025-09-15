import { useState } from "react";
import "./App.css";
import { tabs } from "./Data/tabs";

function App() {

  let [activeTabs, setActiveTabs] = useState(0);
  let [activeContent, setActiveContent] = useState(tabs[0])

  let changeData = (i) => {
    setActiveTabs(i)
    setActiveContent(tabs[i])
  }

  return (
    <div className="app">
      <h1>Vision, Mission and Values</h1>
      <ul>
        {tabs.map((items, i) => {
          return (
            <li>
              <button onClick={() => changeData(i)} className={activeTabs === i ? 'activeButton' : '' }>{items.title}</button>
            </li>
          );
        })}
      </ul>
      {
        activeContent !== undefined ? <p>{activeContent.description}</p> : ''
      }
    </div>
  );
}

export default App;
