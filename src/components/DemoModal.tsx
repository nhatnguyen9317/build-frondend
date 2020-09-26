import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { closeModal } from '../actions/ModalToggleAction';
import './components-css/DemoModal.css';

interface State {
    isOpen: boolean;
}

const DemoModal = () => {
    const isOpen = useSelector<State>(state => state.isOpen);
    const dispatch = useDispatch();

    if (isOpen) {
        return (
            <div className="modal-background modal-open">
                <p className="button-close-modal" onClick={() => dispatch(closeModal())}>
                    &#x2716;
                </p>
                <div className="modal">
                    <div className="modal-head"></div>
                    <div className="modal-body"></div>
                </div>
            </div>
        );
    } else {
        return (<></>);
    }
}

export default DemoModal;
