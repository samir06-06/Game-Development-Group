import React, { useState } from 'react';
import './Asked.css';

const Asked = () => {
  const [visibility, setVisibility] = useState(Array(4).fill(false));

  const questions = [
    'How can I download the game?',
    'Is there free skins included?',
    'When is your next update?',
    'How can I get support?',
  ];

  const answers = [
    'Answer 1',
    'Answer 2',
    'Answer 3',
    'Answer 4',
  ];

  const handleToggleVisibility = (index) => {
    setVisibility((prevVisibility) => {
      const newVisibility = Array(4).fill(false); // Close all answers
      newVisibility[index] = !prevVisibility[index]; // Toggle the selected answer
      return newVisibility;
    });
  };

  return (
    <div id="asked">
      <div className="contact-part">
        <h1 className="asked-h">FREQUENTLY ASKED<br/> QUESTIONS</h1>
        <p className="asked-p">We’re a mobile gaming company with<br/> big ambitions and with empathy at the heart</p>
        <button className="btn white">CONTACT US =</button>
      </div>
      <div className="asked-part">
        {questions.map((question, index) => (
          <div className="how-div" key={index}>
            <div className="question">
              <h5 className="how-h">{question}</h5>
              <i
                onClick={() => handleToggleVisibility(index)}
                className={`fa-solid fa-angle-${visibility[index] ? 'down' : 'up'}`}
              ></i>
            </div>
            <p className={`how-p ${visibility[index] ? 'visible' : 'hidden'}`}>{answers[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Asked;
