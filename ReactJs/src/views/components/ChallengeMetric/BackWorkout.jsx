import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const BackWorkout = () => {
  return (
    <div className='flex items-center text-blue-600 text-lg font-bold mt-4 ml-10 leading-5 '>
      <Link to='/workout'>
        <span className='w-3 h-3 back-icon mr-4' ></span>
        <span>Back to Workout</span>
      </Link>
    </div>
  )
}

export default BackWorkout;