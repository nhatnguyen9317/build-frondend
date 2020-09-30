interface Action {
    type: string;
}

const AuthenticationReducer = (state: boolean = false, action: Action) => {
    switch (action.type) {
        case 'LOGIN':
            return !state;
        case 'LOGOUT':
            return !state;
        default:
            return state;
    }
}

export default AuthenticationReducer;