import React from 'react';
import './quiz.css';
import QuizHeader from "./quizHeader/quizHeader";
import QuizBody from "./quizBody/quizBody";
import QuizFooter from "./quizFooter/quizFooter";

const Quiz = (props) => {
    return(
        <div className="containerQuiz">
            <QuizHeader score={props.score} titleQuiz={props.titleQuiz} />
            <QuizBody quizLength={props.quizLength} stepCounter={props.stepCounter} stepProgressBar={props.stepProgressBar} question={props.question} onClickVariant={props.onClickVariant}/>
            <QuizFooter quizLength={props.quizLength} stepCounter={props.stepCounter} stepProgressBar={props.stepProgressBar} />
        </div>
    )
}

export default Quiz