import React from 'react'
import Header from '../../../components/Header'
import Paginations from '../../../components/Pagination'
import SearchField from '../../../components/SearchField'
import ExerciseDetails from './ExerciseDetails';
import ExerciseLibrary from './ExerciseLibrary';

const ExerciseManagement = () => {
  return (
    <div>
      <ExerciseDetails />
      <Header />
      <div className='m-auto max-w-1800'>
        <div>
          <p className='text-gray-700 font-bold text-3xl mt-10'>Exercise Management</p>
        </div>
        <div className='flex justify-between'>
          <div className='flex justify-end mt-10'>
            <SearchField />
          </div>
          <button className='uppercase w-50 bg-ct4-green-neon text-base p-4 font-bold text-ct4-mossy-green border border-ct4-mossy-green rounded-full mt-5'>Create New Exercise</button>
        </div>
        <div>
          <ExerciseLibrary />
          <Paginations />
        </div>
      </div>
    </div>
  )
};

export default ExerciseManagement;
