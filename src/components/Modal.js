import React from 'react';
import ReactDOM from 'react-dom';

function checkMode(Text) {
    let result = "";
    if (Text === "add") {
        result = "add"
    } else if (Text === "edit") {
        result = "update"
    }
    return result;
}

const Modal = ({ isShowing, hide, modeModal, titleModal }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal-overlay" />
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal_custom">
                <div className="modal-header">
                    <div className="d-flex">
                        <div className="d-flex flex-row justify-content-start">{titleModal}</div>
                        <div className="d-flex flex-row justify-content-end">
                        <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                    </div>
                </div>
                <div className="input-group">
                    <input type="text" className="form-control" id="exampleInputAmount" placeholder="Stt" />
                    <input type="text" className="form-control" id="exampleInputAmount" placeholder="Tên sản phẩm" />
                    <input type="text" className="form-control" id="exampleInputAmount" placeholder="Giá" />

                </div>
                <br />
                <br />
                <button type="button" className="btn btn-sm btn-success">{checkMode(modeModal)}</button>
            </div>
        </div>
    </React.Fragment >, document.body
) : null;

export default Modal;