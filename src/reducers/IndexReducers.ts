import { combineReducers } from 'redux';
import AuthenticationReducer from './AuthenticationReducer';
import ModalToggleReducer from './ModalToggleReducer';

const AllReducers = combineReducers({
    isOpen: ModalToggleReducer,
    isLogin: AuthenticationReducer
})

export default AllReducers;