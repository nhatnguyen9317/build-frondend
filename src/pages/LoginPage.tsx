import React from 'react';

interface DataLogin {
    userName: string;
    password: string;
}

const LoginPage = () => {

    const onSubmit = (data: DataLogin) => {
        let listUser = [];
        console.log(data);
        listUser.push(data);
        console.log(listUser)
    }

    return (
        <div>
            <form onSubmit={() => onSubmit}>
                <label>Login name</label>
                <input name="loginName" type="text"/>
                <label>Password</label>
                <input name="password" type="password"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginPage;