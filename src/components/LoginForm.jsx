import React, { useState } from 'react';
import { useAppContext } from "../application/context";

const LoginForm = () => {

    const {login} = useAppContext();

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    return (
        <form onSubmit={(e) => login(e, loginEmail, loginPassword)} className='container d-flex flex-column align-items-center'>
            <div className='col-sm-4 m-2'>
                <label htmlFor="usuario" className="form-label">Email</label>
                <input onChange={(event) => { setLoginEmail(event.target.value) }} type="email" className="form-control" id="email" placeholder='ejemplo@mail.com' />
            </div>
            <div className='col-sm-4 m-2'>
                <label htmlFor="email" className="form-label">Password</label>
                <input onChange={(event) => { setLoginPassword(event.target.value) }} type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btnLogin btn m-1">Login</button>
        </form>
    );
}

export default LoginForm;
