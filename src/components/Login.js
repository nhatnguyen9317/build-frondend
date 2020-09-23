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
                <span class="input input--ichiro">
					<input class="input__field input__field--ichiro"  type="email"  id="input-25" placeholder="Enter email"/>
					<label class="input__label input__label--ichiro" for="input-25">
						<span class="input__label-content input__label-content--ichiro">Email address</span>
					</label>
				</span>
                    {/* <label>Email address</label>
                    <input type="email" className="input__field input__field--ichiro" id="input-25" placeholder="Enter email" /> */}
                </div>

                <div className="form-group">
                <span class="input input--ichiro">
					<input class="input__field input__field--ichiro"  type="password"  id="input-26" placeholder="Enter password"/>
					<label class="input__label input__label--ichiro" for="input-26">
						<span class="input__label-content input__label-content--ichiro">Password</span>
					</label>
				</span>
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