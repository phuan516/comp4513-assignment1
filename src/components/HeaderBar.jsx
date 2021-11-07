import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const HeaderBar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div id="headerBar">
      <div>
        <Link to="/">
          <img src="https://img.icons8.com/material-sharp/24/000000/home.png" />
        </Link>
      </div>

      <button onClick={openModal} type="button">
        About
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>close</button>
        <div>
          <h1>About</h1>
          <h3>Team Members</h3>
          <p>Anro Tran</p>
          <p>Peter Huang</p>
          <p>Mohamed Aly</p>
          <h3>Github Repo</h3>
          <a href="https://github.com/phuan516/comp4513-assignment1">
            <p style={{ color: "black" }}>Link to Repository</p>
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default HeaderBar;
