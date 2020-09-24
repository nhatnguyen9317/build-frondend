import React, { useState } from 'react';
import './components-css/DemoModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    isOpen: boolean;
}

interface States {
    isOpen: boolean;
}

export const DemoModal: React.ComponentFactory<Props> = () => {

    const [isOpen, setIsOpen] = useState({isOpen: false})

    // const modal = () => {
    //     return (
    //         <div className="modal">
    //             <div className="modal-head"></div>
    //             <div className="modal-body"></div>
    //         </div>
    //     )
    // }

    // const handleClick = (isOpen: boolean) => {
        
    // }

    // render() {
    //     this.setState({isOpen: this.props.isOpen})
    //     if (this.state.isOpen) {
    //         return (
    //             <>
    //                 <div className="modal-background modal-open">
    //                     <button className="button-close-modal" onClick={() => this.handleClick(this.state.isOpen)}>
    //                         <FontAwesomeIcon icon={["fas", "times"]} />
    //                     </button>
    //                     {modal}
    //                 </div>
    //             </>
    //         );
    //     }
    //     if (!this.state.isOpen) {
    //         return (
    //             <>
    //             </>
    //         );
    //     }
    // }
}
