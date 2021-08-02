import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [ModalIsOpen, SetModalIsOpen] = useState(false);

  const deleteHandler = () => {
    SetModalIsOpen(true);
  };

  const CloseModalHandler = () => {
    SetModalIsOpen(false);
  };

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {ModalIsOpen && (
        <Modal OnCancel={CloseModalHandler} OnConfirm={CloseModalHandler} />
      )}
      {ModalIsOpen && <Backdrop closeBackdrop={CloseModalHandler} />}
    </div>
  );
}
export default Todo;
