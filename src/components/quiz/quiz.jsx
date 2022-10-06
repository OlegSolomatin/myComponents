import React from 'react';
import './quiz.css';
import QuizHeader from "./quizHeader/quizHeader";
import QuizBody from "./quizBody/quizBody";
import QuizFooter from "./quizFooter/quizFooter";

const Quiz = (props) => {
    return(
        <div className="containerQuiz">
            <QuizHeader />
            <QuizBody question={props.question} onClickVariant={props.onClickVariant}/>
            <QuizFooter stepProgressBar={props.stepProgressBar} onClickContinue={props.onClickContinue} />
        </div>
    )
}

export default Quiz