import React from 'react';
import './quizProgressBar.css';

const QuizProgressBar = (props) => {
    return(
        <div className="progressBar">
            <div style={{width: `${props.stepProgressBar}%`}} className="progressBar__inner"></div>
        </div>
    )
}

export default QuizProgressBar