const Modal = (props) => {

  return (
    <div className="modal" id="fireModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">WARNING</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to fire this user?</p>
          </div>
          <div className="modal-footer">
            <button type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal">
              No!
            </button>

            <button type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={props.handleOnClick}>
              Goodbye
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal