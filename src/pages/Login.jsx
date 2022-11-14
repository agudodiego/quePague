import React from 'react';
import LoginForm from '../components/LoginForm';


const Login = () => {
  return (
    <>
      <LoginForm />
      <div className='textLogin text-center m-5'>
        <p className='m-0'>Si sos un visitante logeate con:</p>
        <p className='m-0'>Email: <b>quepague@email.com</b></p>
        <p className='m-0'>Password: <b>quepague</b></p>
      </div>
    </>
  );
}

export default Login;
