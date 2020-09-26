interface Action {
    type: string;
}

const ModalToggleReducer = (state: boolean = false, action: Action) => {
    switch (action.type) {
        case 'OPEN':
            return !state;
        case 'CLOSE':
            return !state;
        default:
            return state;
    }
}

export default ModalToggleReducer;