import React from 'react';
import QuizProgressBar from "../quizProgressBar/quizProgressBar";
import QuizCounter from "../quizCounter/quizCounter";

const QuizProgress = (props) => {
    return(
        <div className="containerProgress mob:w-full flex items-center mob:justify-center mob:mb-10">
            <QuizProgressBar stepProgressBar={props.stepProgressBar}/>
            <QuizCounter/>
        </div>
    )
}

export default QuizProgress