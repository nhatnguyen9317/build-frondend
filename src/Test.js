import React from 'react';
import './App.css';
import Modal from "./components/Modal";
import useModal from './components/useModal';

const Test = () => {
  const {isShowing, toggle} = useModal();
  return (
    <div className="App">
      <button className="button-default" onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
};

export default Test;