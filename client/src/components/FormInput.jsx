// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const FormInput = ({value,place,onChange,name}) => {
  return (
    <div>
        <div className='my-4'>
        <input
      className='w-full p-2 border border-black placeholder-opacity-75 rounded-lg focus:outline-none focus:border-orange-400' 
      type="text"
      id={place}
      name={name}
      value={value} 
      onChange={(e) => onChange(e)}
      placeholder={place}
       />
      </div>
    </div>
  )
}

export default FormInput
