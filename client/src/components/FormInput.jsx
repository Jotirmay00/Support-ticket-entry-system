// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const FormInput = ({value,place,onChange}) => {
  return (
    <div>
        <div className='my-4'>
        <input
      className='w-full p-2 border border-gray-400 placeholder-blue-500 placeholder-opacity-75 rounded-full focus:outline-none focus:border-blue-500' 
      type="text"
      id={place}
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      placeholder={place}
      autoFocus />
      </div>
    </div>
  )
}

export default FormInput