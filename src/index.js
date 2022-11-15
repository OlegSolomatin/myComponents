import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppSwitcher from "./AppSwitcher";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppSwitcher />
  </React.StrictMode>
);