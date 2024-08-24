import { createPortal } from "react-dom";
export function Modal(props) {
  return createPortal(
    <>
      <div className="modal-content">
        {props.children}
        <button
          className="close-button"
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
