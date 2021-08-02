function Modal(props) {
  const CancelHandler = () => {
    props.OnCancel();
  };
  const ConfirmHandler = () => {
    props.OnConfirm();
  };

  return (
    <div className="modal">
      <p>Are You Sure?</p>
      <button className="btn btn--alt" onClick={CancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={ConfirmHandler}>
        Confirm
      </button>
    </div>
  );
}
export default Modal;
