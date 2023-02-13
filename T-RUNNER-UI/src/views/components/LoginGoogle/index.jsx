import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../slices/authSlice';
import { Navigate } from 'react-router-dom';

const LoginGoogle = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    const decoded = jwt_decode(res.credential);
    const userProfile = { email: decoded.email, name: decoded.family_name, avatar: decoded.picture, admin: false };
    dispatch(authActions.login(userProfile));
  };

  const onError = () => {
    dispatch(authActions.loginFail());
  };

  return (
    <div >
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onError}
        theme='outline'
        size='medium'
        type='standard'
        shape='rectangular'
        width='250px'
      />
      {isLoggedIn && <Navigate to='/home' replace />}
    </div>
  );
};

export default LoginGoogle;