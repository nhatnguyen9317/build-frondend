const LIST_ALL = 'list_all';
const ADD = 'add';
const UPDATE = 'update';
const initState = {
    name: ''
}
export default function listUserReducder(state = initState, action) {
    switch (action.type) {
        case LIST_ALL:
            return {
                name: 'list_all_dummy'
            }
        case ADD:
            return {
                name: 'add_dummy'
            }
        case UPDATE:
            return {
                name: 'update_dummy'
            }
        default:
            return {
                name: 'delete_dummy'
            }
    }
    return state;

}