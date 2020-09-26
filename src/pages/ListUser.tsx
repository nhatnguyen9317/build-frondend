import React from 'react';
import DemoModal from '../components/DemoModal';
import { useDispatch } from 'react-redux';
import { openModal } from '../actions/ModalToggleAction';

const ListUser = () => {
    const dispatch = useDispatch();
    return (
        <>
            <button onClick={() => dispatch(openModal())}>Click here</button>
            <DemoModal />
        </>
    )
}

export default ListUser;