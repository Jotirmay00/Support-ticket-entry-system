// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Spinner from "../components/Spinner"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import FormInput from '../components/FormInput'



const CreateAgent = () => {
const [name,setName] = useState()
const [email,setEmail] = useState()
const [num,setNum] = useState()
const [description,setDescription] = useState()





  return (
  
<form>
    <div className='flex flex-col rounded-xl w-[600px] p-4 mx-auto '> 
    <h1 className='text-3xl my-4 mx-auto text-center weight-5'>Create Agent</h1>
        <FormInput place="name" value={name} onChange={setName}/>
        <FormInput place="email"value={email} onChange={setEmail}/>
        <FormInput place="phone-no." value={num} onChange ={setNum} />
        <FormInput place="description" value={description} onChange={setDescription}/> 
        <div className='flex flex-col rounded-xl w-[600px] p-4 mx-auto items-center'>
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4'>Submit</button>
        </div>
    </div>
</form>
  )
}

export default CreateAgent