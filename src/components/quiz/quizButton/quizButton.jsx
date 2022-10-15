import React from 'react';
import './quizButton.css';

const QuizButton = (props) => {
    return(
        <a href='/' className='defaultButton'>{props.textButton}</a>
    )
}

export default QuizButton