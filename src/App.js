import React, { Component } from 'react';
import './App.css';
// import Product from './components/Product'
import { Link } from "react-router-dom";
// import Modal from './components/Modal'
import Modal from "./components/Modal";
import useModal from './components/useModal';
import './set1.css'


class App extends Component {
  

  constructor(props) {
    super(props);
    this.state= {
      products : [
      {
        id: 1,
        name :'Apple 12 pro max',
        price : "20000000",
        status: true
      },
      {
        id: 2,
        name :'Samsung galaxy',
        price : "10000000",
        status: true
      },
      {
        id: 3,
        name :'Oppo X5',
        price : "8000000",
        status: true
        }
      ],
      isActive : true ,
      icon :"^",
    };
  }
   
  add = () => {
    const {isShowing, toggle} = useModal();
  let  mode="add"
  let title="Đăng ký user"
    return (
      <div>
        <button type="button" className="btn btn-lg btn-success">Search</button>
        <button  className="btn btn-lg btn-success" onClick={toggle}>Add</button>
        <Modal
          isShowing={isShowing}
          hide={toggle} 
          modeModal= {mode}
          titleModal= {title}
        />
      </div>
    );
  };
  update = () => {
    const {isShowing, toggle} = useModal();
    let  mode="edit"
    let title="Update user"
    return (
      <div>
        <button type="button">Delete</button>
        <button onClick={toggle}>Update</button>
        <Modal
          isShowing={isShowing}
          hide={toggle}
          modeModal={mode}
          titleModal={title}
        />
      </div>
    );
  };
  onSetState=()=>{
    this.setState({
      isActive:!this.state.isActive
    });
    if(this.state.icon==="^"){
      this.setState({
        icon:"v"
      })
    }else{
      this.setState({
        icon:"^"
      })
    }
    if(this.state.mode==="add"){
      this.setState({
        mode:"add"
      })
    }else if(this.state.mode==="update"){
      this.setState({
        mode:"update"
      })
    }
  }
  
  
  render() {
    let elements= this.state.products.map((product,index) => {
        let result= '';
        if(this.state.isActive===true)  {
                              result=  <tr key={index}>
                                          <td>{index}</td>
                                          <td>{product.name}</td>
                                          <td>
                                           <span className="label label-success">{product.price}</span>
                                            </td>
                                          <td><this.update/></td>
                                        </tr>
                             }else{
                              result = <tr></tr>
                             }
                          
        return result;
     }
    );
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand">States</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a>Home</a>
            </li>
            <li>
              <a>Link</a>
            </li>
          </ul>
        </nav>
        <div className="container">
          <div className="row">
            <div className="row">
              <this.add/>
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>giá</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                {elements}
                </tbody>
              </table>
              <button type="button" className="btn btn-warning" onClick={this.onSetState}>
                {this.state.icon}
                </button>
                
          </div>
        </div>
      </div>
       </div>
    )
  }
}
export default App;


