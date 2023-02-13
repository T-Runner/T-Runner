import React from 'react'

const TotalResult = ({ total, limit }) => {
  return (
    <div>
      <p className='font-barlow text-sm mr-4 flex items-center'>{`1-${limit} of ${total}`}</p>
    </div>
  )
}

export default TotalResult;