import "./Modal.css";
import ReactDOM from "react-dom";

function Modal({ children, closeModal, isModal }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: isModal ? "yellowgreen" : "red",
          textAlign: "center",
        }}
      >
        {children}
        <button className={isModal ? "modal-btn" : ""} onClick={closeModal}>
          Close
        </button>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
