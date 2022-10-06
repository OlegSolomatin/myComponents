import React from 'react';
import './quizHeader.css';
import QuizScore from "../quizScore/quizScore";
import CloseButton from "../quizButton/closeButton";

const QuizHeader = () => {
    return(
        <header className='containerQuiz--header'>
            <QuizScore />
            <h3 className="titleQuiz">Fantasy Quiz #156</h3>
            <CloseButton />
        </header>
    )
}

export default QuizHeader