import React, { useState } from "react";
import './Faqs.css'
import { questions } from "./Data/FaqQuestions";

function Faqs() {

    let [currentId, setCurrentId] = useState(questions[0].id);

    let items = questions.map((items, i) => {

        let itemsDetails = {
            items,
            currentId,
            setCurrentId
        }
    return (
      <FaqItems itemsDetails={itemsDetails} key={i} />
    )
  })

  return (
    <div>
      <h1>Frequently Asked Questions (FAQs)</h1>
      <div className="faqOuter">
        {items}
      </div>
    </div>
  );
}

export default Faqs;

function FaqItems({itemsDetails}) {

    let {items, currentId, setCurrentId} = itemsDetails

  return (
    <div className="faqItems">
      <h2 onClick={()=>setCurrentId(items.id)}>{items.question}</h2>
      <p className={currentId === items.id ? 'activeFaq' : ''}>
        {items.answer}
      </p>
    </div>
  );
}
