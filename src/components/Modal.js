import { useState } from "react";

let Modal = ({
  text,
  showModal,
  setShowModal,
  component: Component,
  height,
  width,
}) => {
  let modalClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  if (!showModal) {
    return <></>;
  }
  return (
    <div
      className=""
      id="modal-root"
      onClick={() => setShowModal(false)}
      style={{
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        position: "fixed",
        zIndex: "1040",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        className="modal-custom center"
        onClick={(e) => modalClick(e)}
        style={{
          height: height || "60vh",
          width: width || "40vw",
          backgroundColor: "white",
          top: "50vh",
          left: "50vw",
          display: "block",
          borderRadius: "15px",
          transform: "translate(-50%, -50%)",
          zIndex: "1050",
          position: "fixed",
          opacity: "1",
          minWidth: "400px",
          minHeight: "600px",
        }}
      >
        <h1 className="text-center">{text}</h1>
        <Component />
        <div
          className="modal-footer-custom"
          style={{
            bottom: "0px",
            position: "absolute",
            width: "100%",
          }}
        >
          <button
            onClick={() => setShowModal(false)}
            style={{ width: "100%", borderRadius: "15px", height: "3em" }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
