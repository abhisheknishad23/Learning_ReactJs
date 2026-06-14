import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReturnBack = () => {

    let navigate = useNavigate()


  return (
    <div className=' py-2 px-5'>
        <button onClick={()=>{navigate('/')}} className='font-medium py-2 m-2 bg-emerald-700 mt-2 rounded px-4 cursor-pointer active:scale-75'>Return To Home</button>
        <button onClick={()=>{navigate(-1)}} className='font-medium py-2 m-2 bg-emerald-700 mt-2 rounded px-4 cursor-pointer active:scale-75'>Back</button>
        <button onClick={()=>{navigate(+1)}} className='font-medium py-2 m-2 bg-emerald-700 mt-2 rounded px-4 cursor-pointer active:scale-75'>Next</button>
    </div>
  )
}

export default ReturnBack