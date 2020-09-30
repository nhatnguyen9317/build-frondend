import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { login } from '../actions/AuthenticationAction';
import './pages-css/LoginPage.css';

interface DataLogin {
    loginName: string;
    password: string;
}

const LoginPage = () => {

    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm<DataLogin>();

    const listUser = [
        {
            loginName: "admin1",
            password: "admin1234"
        },
        {
            loginName: "admin2",
            password: "admin12345"
        }
    ];

    const onSubmit = (data: DataLogin) => {
        console.log(data);
        const userLogin = listUser.find(user => user.loginName === data.loginName)
        if (userLogin?.password === data.password) {
            console.log("login success!")
            dispatch(login());
        } else {
            console.log("login fail!")
        }
    };

    return (
        <div className="div-login">
            <p className="header-login">
                Login here
            </p>
            <div className="body-login">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="box-input">
                        <label>Login name</label>
                        <input name="loginName" type="text" ref={register} />
                    </div>
                    <div className="box-input">
                        <label>Password</label>
                        <input name="password" type="password" ref={register} />
                    </div>
                    <button className="button-submit" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;