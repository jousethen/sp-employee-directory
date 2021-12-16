const Modal = (props) => {

  return (
    <div class="modal" tabindex="-1" id="fireModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">WARNING</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to fire this user?</p>
          </div>
          <div class="modal-footer">
            <button type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal">
              No!
            </button>

            <button type="button"
              class="btn btn-primary"
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