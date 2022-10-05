import React from 'react';
import './modalFooter.css';

const ModalFooter = (props) => {
    return(
        <footer className='modalFooter p-5'>
            <button onClick={props.close} className="modalFooter__button">
                Cancel
            </button>
            <button onClick={props.close} className="modalFooter__button modalFooter__button-confirm">
                Confirm
            </button>
        </footer>
    )
}

export default ModalFooter