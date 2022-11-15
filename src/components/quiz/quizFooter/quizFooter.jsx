import React from 'react';
import './quizFooter.css';
import QuizButton from "../quizButton/quizButton";
import {useMediaQuery} from "react-responsive";
import QuizProgress from "../quizProgress/quizProgress";

const QuizFooter = (props) => {

    const isDesktop = useMediaQuery({query: '(min-width: 767.7px)'});

  return(
      <footer className="containerQuiz--footer">
          {
              props.stepProgressBar >= '99' ? (
                  <QuizButton textButton={props.textButton}/>
              ) : (
                  isDesktop && <QuizProgress quizLength={props.quizLength} stepCounter={props.stepCounter} stepProgressBar={props.stepProgressBar} />
              )
          }

      </footer>
  )
}

export default QuizFooter