import React from "react";

function Modal(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          ✕
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Modal;
