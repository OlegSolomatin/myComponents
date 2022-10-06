import React from 'react';
import './quizButton.css';

const QuizButton = (props) => {
    return(
        <button onClick={props.onClickContinue} className='defaultButton'>Continue</button>
    )
}

export default QuizButton