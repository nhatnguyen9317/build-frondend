import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
            <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
        <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <Link to='/list'><button type="submit" className="btn btn-success btn-block">Login</button></Link>
                <p className="forgot-password text-right">
                    Forgot <a>password?</a>
                </p>
            </form>
            
        </div>
      </div>
    </div>
           
        );
    }
}