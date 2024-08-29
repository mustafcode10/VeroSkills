import React from "react";
import { createPortal } from "react-dom";

function Modal(props) {
  return createPortal(
    <>
      <div className="modal-content">
        {props.children}
        <button
    
          onClick={() => props.setShowModal(false)}
        >
          ✕
        </button>
      </div>

      <div className="overlay"></div>
    </>,
    document.getElementById("modal-root")
  );
}

export default Modal;
