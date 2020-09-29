import React from 'react';
import { useForm } from "react-hook-form";
import './pages-css/LoginPage.css';

interface DataLogin {
    userName: string;
    password: string;
}

const LoginPage = () => {

    const { register, handleSubmit } = useForm<DataLogin>()

    const onSubmit = (data: DataLogin) => {
        console.log(data);
    }

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
    )
}

export default LoginPage;