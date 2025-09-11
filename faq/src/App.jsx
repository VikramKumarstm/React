import React, { useState } from "react";
import "./App.css";
import { questions } from "./Data/faqQuestions";

function App() {
  const [openItem, setOpenItem] = useState(questions[0].id);

  return (
    <div className="app">
      <div className="faqOuter">
        <h1>Frequently Ask Questions (FAQs)</h1>
        {questions.map((items, i) => {
          return (
            <div className="faqItems">
              <h2 onClick={() => setOpenItem(items.id)}>{items.question}</h2>
              <p className={openItem == items.id ? "activeAns" : "nonActive"}>
                {items.answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
