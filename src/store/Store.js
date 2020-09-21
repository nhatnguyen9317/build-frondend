import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux';
import listUserReducder from '../components/listUser/ListUser.reducer'

export default createStore(
    listUserReducder,
    composeWithDevTools()
);
