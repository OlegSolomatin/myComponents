import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppQuiz from './AppQuiz';
import AppSwitcher from "./AppSwitcher";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppQuiz />
    <AppSwitcher />
  </React.StrictMode>
);