import React, { useState } from 'react';
import './components-css/DemoModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    isOpen: boolean;
}

const DemoModal = (props: Props) => {

    const [isOpen, setIsOpen] = useState<boolean>(props.isOpen);

    const toggleModal = () => {
        console.log(isOpen);
        setIsOpen(!isOpen);
    }

    const modal = () => {
        console.log("open modal");
        return (
            <div className="modal">
                <div className="modal-head"></div>
                <div className="modal-body"></div>
            </div>
        );
    }

    if (isOpen) {
        return (
            <>
                <div className="modal-background modal-open">
                    <button className="button-close-modal" onClick={() => toggleModal()}>
                        <FontAwesomeIcon icon={["fas", "times"]} />
                    </button>
                    {modal}
                </div>
            </>);
    }
    if(!isOpen) {
        return (<></>);
    }
}

export default DemoModal
