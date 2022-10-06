import React from 'react';
import './quizBody.css';
import {useMediaQuery} from "react-responsive";
import QuizProgress from "../quizProgress/quizProgress";

const QuizBody = (props) => {

    const isMobile = useMediaQuery({query: '(max-width: 767.7px)'});
    let indexQuestion = 1;

    return(
        <main className="containerQuiz--body">
            {isMobile && <QuizProgress/>}
            <h2 className="titleQuiz-question">{props.question.title}</h2>
            <ul className="listQuiz-question">
                {
                    props.question.variants.map((text,index) => (
                        <li onClick={() => props.onClickVariant(index)} key={index} className="question-item">
                            <span className='item-number'>{indexQuestion++}</span>
                            <span className='item-text'>{text}</span>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}

export default QuizBody