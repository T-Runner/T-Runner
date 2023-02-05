import React, { useState } from 'react'
import { defaultExerciseLibrary, exercisesdata } from '../../../../constants'
import ExerciseDetails from './ExerciseDetails';

const ExerciseLibrary = () => {
  const [showModal, setShowModal] = useState(false);
  const [exercise, setExercise] = useState(defaultExerciseLibrary);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleOpen = (item) => {
    setExercise({
      name: item.name,
      img: item.img
    })
    setShowModal(true)
  }

  return (
    <div className='grid grid-cols-6 mt-5'>
      {exercisesdata.map((item, index) => (
        <div onClick={() => handleOpen(item)} className='m-2 border bg-gray-100 p-2 w-288 rounded-xl cursor-pointer' key={index} >
          <img className='w-272 h-180 rounded-xl' src={item.img} alt='exercise' />
          <p className='w-272 items-center text-center font-bold mt-2'>{item.name}</p>
        </div>
      ))}
      {showModal && <ExerciseDetails isShow={showModal} onClose={handleClose} data={exercise} />}
    </div>
  )
};

export default ExerciseLibrary;