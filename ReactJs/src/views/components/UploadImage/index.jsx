import React, { useState } from 'react';
import CameraIcon from '../Icons/camera-icon';
import RecycleBinIcon from '../Icons/recycle-bin-icon';
import UploadImageIcon from '../Icons/upload-image-icon';

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const renderImage = () => {
    return (<div>
      <img alt="not found" className='w-200 h-200' src={URL.createObjectURL(selectedImage)} />
      <br />
      <div className='flex justify-center'>
        <div >
          <label htmlFor="dropzone-file">
            <div className='flex items-center cursor-pointer'>
              <CameraIcon />
              <p className='ml-1 uppercase font-barlow font-semibold text-ct4-dark-green' >Change</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={(event) => { setSelectedImage(event.target.files[0]); }} />
          </label>
        </div>
        <div className='mx-5'>|</div>
        <div className='flex items-center cursor-pointer' onClick={() => setSelectedImage(null)}>
          <RecycleBinIcon />
          <button className='ml-1 uppercase font-barlow font-semibold text-ct4-dark-green' >Remove</button>
        </div>
      </div>
    </div>)
  };

  const renderUploadField = () => {
    return (<label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-600 h-400 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <UploadImageIcon />
        <p className='mt-6 font-barlow text-ct4-gray-3'>Maximum size is 2MB</p>
        <div className='flex gap-x-1 mt-4'>
          <p className='font-barlow underline text-ct4-dark-green'>Click to upload</p>
          <p>or drag and drop.</p>
        </div>
      </div>
      <input id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={(event) => { setSelectedImage(event.target.files[0]); }} />
    </label>)
  };

  return (
    <div className='text-sm font-barlow-regular col-span-2'>
      <p >Group Picture</p>
      <div className="flex items-center w-full mt-2" >
        {selectedImage ? renderImage() : renderUploadField()}
      </div>
    </div>
  )
};

export default UploadImage;