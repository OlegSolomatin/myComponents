import React from 'react';
import Quiz from "./components/quiz/quiz";
import QuizFinal from "./components/quiz/quizFinal/quizFinal";

const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
        score: 50
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 2,
        score: 100,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
        score: 70,
    },
];
const titleQuiz = 'Fantasy Quiz #156';
const textButton = 'Начать заного'

function AppQuiz() {

    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const question = questions[step];
    const stepProgress = Math.round((step/questions.length) * 100);

    const onClickVariant = (index) => {
        setStep(step + 1);

        if (index === question.correct) {
            setCorrect(correct + 1);
            setScore(score + question.score);
        }
    }

  return (
    <div className="AppQuiz">
        {
            step !== questions.length ? (
                    <Quiz score={score} quizLength={questions.length} titleQuiz={titleQuiz} stepCounter={step} stepProgressBar={stepProgress} question={question} onClickVariant={onClickVariant}/>
                ) : (
                    <QuizFinal score={score} textButton={textButton} stepProgressBar={stepProgress} correct={correct} titleQuiz={titleQuiz}/>
                )
        }
    </div>
  );
}

export default AppQuiz;
