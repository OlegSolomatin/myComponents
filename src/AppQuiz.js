import React from 'react';
import Quiz from "./components/quiz/quiz";

const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
];

function AppQuiz() {

    const [step, setStep] = React.useState(0);
    const question = questions[step];
    /*const stepProgress = Math.round((step/questions.length) * 100);*/

    const onClickVariant = (index) => {
        console.log(step, index)
    }

    const onClickContinue = () => {
        setStep(step + 1);
    }
/*
    const stepCount = () => {
        stepProgress;
    }*/

  return (
    <div className="AppQuiz">
      <Quiz stepProgressBar={stepCount} question={question} onClickVariant={onClickVariant} onClickContinue={onClickContinue}/>
    </div>
  );
}

export default AppQuiz;
