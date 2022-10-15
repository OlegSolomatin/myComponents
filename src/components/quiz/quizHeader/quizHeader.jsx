import React from 'react';
import './quizHeader.css';
import QuizScore from "../quizScore/quizScore";
import CloseButton from "../quizButton/closeButton";

const QuizHeader = (props) => {
    return(
        <header className='containerQuiz--header'>
            <QuizScore score={props.score} />
            {
                props !== '' ? (
                    <h3 className="titleQuiz">{props.titleQuiz}</h3>
                    ) : (
                        ''
                    )
            }
            <CloseButton />
        </header>
    )
}

export default QuizHeader