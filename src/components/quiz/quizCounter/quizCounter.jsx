import React from 'react';
import './quizCounter.css';


const QuizCounter = (props) => {
  return(
      <div className="containerCounter">
          {props.stepCounter + 1}&nbsp;/&nbsp;{props.quizLength}
      </div>
  )
}

export default QuizCounter