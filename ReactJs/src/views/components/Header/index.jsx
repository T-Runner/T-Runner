import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'

import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { loginRequest } from '../../../authconfig';

const Header = (props) => {
  const isAdmin = props.admin;
  const { instance } = useMsal();
  let activeAccount;
  if (instance) {
    activeAccount = instance.getActiveAccount();
  }

  const handleLoginPopup = () => {
    instance
      .loginPopup({
        ...loginRequest,
        // redirectUri: 'http://localhost:3000/',
        redirectUri: 'https://www.izibds.com',
      })
      .catch((error) => console.log(error));
  };

  const handleLogoutPopup = () => {
    instance.logoutPopup({
      mainWindowRedirectUri: '/',
    });
  };

  return (
    <div className='w-full flex justify-between bg-white shadow-lg font-tnr'>
      {isAdmin ?
        <div className='navbar_item font-bold text-lg text-gray-600'>
          <NavLink to='/member-management'>Member Management</NavLink>
          <NavLink to='/exercise-management'>Exercise Management</NavLink>
        </div>
        :
        <div className='navbar_item font-bold text-lg text-gray-600'>
          <NavLink to='/home'>Upcomming Classes</NavLink>
          <NavLink to='/workout'>Your Workout Summary</NavLink>
          <NavLink to='/community'>Our Communnity</NavLink>
        </div>
      }

      <AuthenticatedTemplate>
        <div className='flex gap-5 p-3'>
          <div className='w-12 h-12'>
            <img className='rounded-full' src={props.avatar || 'https://ionicframework.com/docs/img/demos/avatar.svg'} />
          </div>
          <div >
            <p className='font-bold'>Welcome, {activeAccount && activeAccount.name ? activeAccount.name : ''} </p>
            <p >{activeAccount && activeAccount.username ? activeAccount.username : 'Unknown'}</p>
          </div>
          <button className='cursor-pointer uppercase border border-ct4-mossy-green w-36 h-12 bg-ct4-green-neon font-bold rounded-3xl text-ct4-mossy-green ' onClick={handleLogoutPopup}>
            Sign Out
          </button>
        </div>
      </AuthenticatedTemplate >
      <UnauthenticatedTemplate>
        <div className='flex gap-5 p-3'>
          <button className='cursor-pointer uppercase border border-ct4-mossy-green w-36 h-12 bg-ct4-green-neon font-bold rounded-3xl text-ct4-mossy-green ' onClick={handleLoginPopup}>
            Sign In
          </button>
        </div>
      </UnauthenticatedTemplate>
    </div >
  );
};

export default Header;