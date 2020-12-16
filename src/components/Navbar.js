import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Modal from "./Modal";
import ReactDom from "react-dom";

let Navbar = (props) => {
  let [showModal, setShowModal] = useState(false);
  let [modalComponent, setModalComponent] = useState(<></>);

  let createModal = () => {
    let modalDiv = document.getElementById("modalRenderer");
    if (!modalDiv) {
      let modalDiv = document.createElement("div");
      modalDiv.id = "modalRenderer";
      document.body.appendChild(modalDiv);
    }

    ReactDom.render(
      <Modal
        text="test"
        showModal={showModal}
        setShowModal={setShowModal}
        component={modalComponent}
        setModalComponent={setModalComponent}
      />,
      document.getElementById("modalRenderer")
    );
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
    >
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger" to="/">
          Zachary Bentsen
        </Link>

        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto ">
            <li className="px-1 nav-item">
              <Link className="nav-link js-scroll-trigger scroll-top" to="/">
                Home
              </Link>
            </li>
            <li className="px-1 nav-item">
              <Link
                className="nav-link js-scroll-trigger scroll-top"
                to="/About"
              >
                About
              </Link>
            </li>
            <li className="px-1 nav-item">
              <Link
                className="nav-link js-scroll-trigger scroll-top"
                to="/Projects"
              >
                Projects
              </Link>
            </li>
            <li className="px-1 nav-item">
              <Link
                className="nav-link js-scroll-trigger scroll-top"
                to="/Blog"
              >
                Blog
              </Link>
            </li>
            <li className="px-1 nav-item">
              <a
                className="nav-link js-scroll-trigger"
                onClick={() => {
                  createModal();
                  setModalComponent(Login);
                  setShowModal(true);
                }}
                style={{ cursor: "pointer" }}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
