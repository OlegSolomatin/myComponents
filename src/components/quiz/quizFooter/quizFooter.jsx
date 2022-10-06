import React from 'react';
import './quizFooter.css';
import QuizButton from "../quizButton/quizButton";
import {useMediaQuery} from "react-responsive";
import QuizProgress from "../quizProgress/quizProgress";

const QuizFooter = (props) => {

    const isDesktop = useMediaQuery({query: '(min-width: 767.7px)'});

  return(
      <footer className="containerQuiz--footer">
          {isDesktop && <QuizProgress stepProgressBar={props.stepProgressBar} />}
          <QuizButton onClickContinue={props.onClickContinue}/>
      </footer>
  )
}

export default QuizFooter