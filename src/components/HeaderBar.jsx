import React from "react";
import { useState } from "react";
import Modal from "react-modal";

const HeaderBar = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div>Logo</div>

      <button onClick={openModal} type="button">
        About
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>close</button>
        <div>Add about information here</div>
      </Modal>
    </div>
  );
};

export default HeaderBar;
