import React from 'react';
import './modalButtons.css';

const ModalButtons = (props) => {
  return(
      <button onClick={props.open} className="modalButtons bg-indigo-900 text-gray-300 rounded-xl text-lg">Open Modal</button>
  )
}

export default ModalButtons