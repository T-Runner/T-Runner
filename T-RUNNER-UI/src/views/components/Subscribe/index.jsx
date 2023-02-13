import React, { Component } from 'react';

class Subscribe extends Component {
  render() {
    return (
      <div className='relative'>
        <div className='bg-no-repeat bg-cover bg-center h-480 p-10 bg-ct4-subscribe blur-sm bg-img mt-6'>
        </div>
        <div className='subcribe'>
          <p className='mt-5 p-1 text-2xl text-white m-auto'>Subscribe to receive challenge for each day.</p>
          <button className='p-4 m-auto h-16 text-xl bg-gradient-to-r from-ct4-red-1 to-ct4-red mt-5 text-white rounded-xl'>Subcribe</button>
        </div>
      </div>
    )
  }
};

export default Subscribe;