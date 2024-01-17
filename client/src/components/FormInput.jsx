// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const FormInput = ({value,place,onChange}) => {
  return (
    <div>
        <div className='my-4'>
        <input
      className='px-4 py-2 w-full rounded-full border-slate-600 border-2' 
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