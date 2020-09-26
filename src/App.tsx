import React from 'react';
import DemoModal from './components/DemoModal';
import './App.css';
import { useDispatch } from 'react-redux';
import { openModal } from './actions/ModalToggleAction';

const App = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(openModal())}>Click here</button>
      <DemoModal />
    </>
  )
}

export default App;
