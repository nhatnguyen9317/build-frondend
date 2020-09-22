import React from 'react';
import DemoModal from './components/DemoModal';
import './App.css';

interface ComponentState {
  isOpen: boolean;
}

export default class App extends React.Component<ComponentState> {
  state: ComponentState = {
    isOpen: false,
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <>
        <button onClick={() => this.handleClick()}>Click here</button>
        <DemoModal isOpen={this.state.isOpen} />
      </>
    );
  }
}
