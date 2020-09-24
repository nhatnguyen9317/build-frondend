import React from 'react';
import DemoModal from './components/DemoModal';
import './App.css';

interface ComponentState {
  isOpen: boolean;
}

export default class App extends React.Component {
  state: ComponentState = {
    isOpen: false,
  }

  handleClick(isOpen: boolean) {
    console.log("phai mo modal")
    this.setState({ isOpen: !isOpen })
  }

  render() {
    console.log(this.state.isOpen);
    return (
      <>
        <button onClick={() => this.handleClick(this.state.isOpen)}>Click here</button>
        <DemoModal isOpen={this.state.isOpen}/>
      </>
    );
  }
}
