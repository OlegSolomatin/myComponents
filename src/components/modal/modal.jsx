import React from 'react';
import './modal.css';
import ModalHeader from "./modalHeader/modalHeader";
import ModalBody from "./modalBody/modalBody";
import ModalFooter from "./modalFooter/modalFooter";

const Modal = (props) => {
  return(
      <div className="overlay">
          <div className='containerModal mt-10 rounded-xl'>
              <ModalHeader close={props.close} />
              <ModalBody />
              <ModalFooter close={props.close} />
          </div>
      </div>
  )
}

export default Modal