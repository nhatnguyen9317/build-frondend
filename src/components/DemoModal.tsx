import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../actions/ModalToggleAction';
import './components-css/DemoModal.css';

interface State {
    isOpen: boolean;
}

const DemoModal = () => {
    const isOpen = useSelector<State>(state => state.isOpen);
    const dispatch = useDispatch();

    const Modal = () => {
        return (
            <div className="modal">
                <div className="modal-head">
                    <p className="modal-head-title">This is Modal</p>
                    <p className="button-close-modal" onClick={() => dispatch(closeModal())}>&#x2716;</p>
                </div>
                <div className="modal-body"></div>
            </div>
        )
    }

    if (isOpen) {
        return (
            <div className="modal-background modal-open">
                <Modal />
            </div>
        );
    } else {
        return (<></>);
    }
}

export default DemoModal;
