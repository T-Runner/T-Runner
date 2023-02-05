import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import FormInput from '../../components/FormInput';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../../services/auth/authService';
import { authActions } from '../../../slices/authSlice';
//import LoginGoogle from '../../components/LoginGoogle';
//import LoginFacebook from '../../components/LoginFacebook';

const LoginPage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isError = useSelector(state => state.auth.error);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHide, setIsHide] = useState(false);

  //events
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setIsHide(!isHide);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === 'tuananh@gmail.com' && password === '12345678') {
      const isLogin = await login(email, password);
      const userProfile = { email: email, name: 'Tuan Anh', avatar: 'http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128', admin: false };
      isLogin ? dispatch(authActions.login(userProfile)) : dispatch(authActions.loginFail());
    }
    else if (email === 'ct4admin@gmail.com' && password === '12345678') {
      const isLogin = await login(email, password);
      const userProfile = { email: email, name: 'CT4 Admin', avatar: 'https://thumbs.dreamstime.com/b/admin-icon-vector-male-user-person-profile-avatar-gear-cogwheel-settings-configuration-flat-color-glyph-pictogram-150138136.jpg', admin: true };
      isLogin ? dispatch(authActions.login(userProfile)) : dispatch(authActions.loginFail());
    }
    else {
      dispatch(authActions.loginFail());
    }
  };

  return (
    <div className='w-full text-center relative bg-cover pt-30 font-tnr'>
      <div className='flex justify-center pb-3'>
        <img style={{ height: '300px' }} src='https://www.fitnesstogether.gr/wp-content/uploads/2021/06/Kick-Boxing-1-1024x529.jpg' alt='GTT logo' />
      </div>
      <div className=' w-0.3 bg-white ml-0.35'>
        <form onSubmit={handleSubmit}>
          <p>Already have an account?</p>
          <FormInput
            email={email}
            password={password}
            changeEmail={onChangeEmail}
            changePassword={onChangePassword}
            error={isError}
            isHide={isHide}
            onClick={handleClickShowPassword}
            isRegister={false}
          />
          <button type='submit' className='btn bg-ct4-orange my-3 font-sans'>Log In</button>
          {isLoggedIn && <Navigate to='/home' replace />}
          <Link to='/register' className='text-sm hover:underline'>New to GTT? Sign up.</Link>
        </form>
        
      </div>
    </div >
  );
};

export default LoginPage;
