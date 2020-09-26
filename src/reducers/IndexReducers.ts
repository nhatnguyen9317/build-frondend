import { combineReducers } from 'redux';
import ModalToggleReducer from './ModalToggleReducer';

const AllReducers = combineReducers({
    isOpen: ModalToggleReducer
})

export default AllReducers;