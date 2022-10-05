import React from 'react';
import ModalButtons from "./components/modal/modalButtons/modalButtons";
import Modal from "./components/modal/modal";

function AppModal() {
    const [open, setOpen] = React.useState(false);

    const openModal = () => {
        setOpen(true)
    }

    const closeModal = () => {
        setOpen(false)
    }


  return (
    <div className="AppModal">
        <ModalButtons open={openModal} />
        {open && (
            <Modal close={closeModal} />
        )}
    </div>
  );
}

export default AppModal;
