import React from 'react';
import './components-css/DemoModal.css';

interface ComponentProps {
    isOpen: boolean;
}

interface ComponentStates {
    isOpen: boolean;
}

export default class DemoModal extends React.Component<ComponentProps, ComponentStates> {

    constructor(props: ComponentProps) {
        super(props);
        this.setState({ isOpen: this.props.isOpen });
    }

    modal() {
        console.log("open modal")
        return (
            <div className="modal">
                <div className="modal-head"></div>
                <div className="modal-body"></div>
            </div>
        )
    }

    render() {
        if (this.state.isOpen) {
            return (
                <>
                    <div className="modal-background modal-open">
                        <p className="button-close-modal">
                            <i className="fas fa-times"></i>
                        </p>
                        {this.modal()}
                    </div>
                </>
            );
        }
        if (!this.state.isOpen) {
            return (
                <>
                </>
            );
        }
    }
}
