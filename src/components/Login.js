import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

const Login = () => {
    const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => {dispatch(login({name: "Diana", age: 35, email: "diana@email.com"}))}}>Login</button>

      <button onClick={ () => {dispatch(logout())}}>LOGOUT</button>
    </div>
  )
}

export default Login
