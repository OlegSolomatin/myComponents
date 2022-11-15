import React from 'react';
import './quizFinal.css';
import '../quizBody/quizBody.css';
import { ReactComponent as QuizFinalImg } from '../../../assets/quizBox.svg';
import QuizHeader from "../quizHeader/quizHeader";
import { ReactComponent as QuizScore} from '../../../assets/moneyScore.svg';
import { ReactComponent as QuizCheck} from '../../../assets/check.svg';
import QuizFooter from "../quizFooter/quizFooter";

const QuizFinal = (props) => {
  return(
      <div className="containerQuiz">
          <QuizHeader score={props.score} />
          <main className="containerQuiz--body">
              <QuizFinalImg />
              <h2 className="titleQuiz-question titleQuiz-result">{props.titleQuiz}</h2>
              <ul className="listQuiz-result">
                  <li className='result-item'>
                      <span className='item-icon'>
                          <QuizScore />
                      </span>
                      <span className='item-text'>score again</span>
                      <span className="item-counter-result">{props.score}</span>
                  </li>
                  <li className="result-item">
                      <span className="item-icon">
                          <QuizCheck />
                      </span>
                      <span className="item-text">corrected predictions</span>
                      <span className="item-counter-result">{props.correct}</span>
                  </li>
              </ul>
          </main>
          <QuizFooter textButton={props.textButton} stepProgressBar={props.stepProgressBar} />
      </div>
  )
}

export default QuizFinal