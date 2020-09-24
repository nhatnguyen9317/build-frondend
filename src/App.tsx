import React, { useState } from 'react';
import DemoModal from './components/DemoModal';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button onClick={() => toggleModal()}>Click here</button>
      <DemoModal isOpen={isOpen}/>
    </>
  )
}

export default App;
