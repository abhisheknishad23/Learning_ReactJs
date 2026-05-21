import React, { useState } from 'react'

const UseState = () => {
    const [num, Setnum]=useState(0)

    function incnum(){
        Setnum(num+1)
    }
    function decnum(){
        Setnum(num-1)
    }
    function jump(){
        Setnum(num+10)
    }


  return (
    <div className='py-4  text-center'>
        <h1 className='bg-amber-300 p-4 mb-6' >value {num}</h1>
        <button className='bg-red-700 p-4 ml-6 mr-5 rounded-2xl' onClick={incnum}>Increse</button>
        <button className='bg-green-600 p-4 mb-4 mr-6 rounded-2xl' onClick={decnum}>Decrease</button>
        <button className='bg-pink-600 p-4 rounded-2xl' onClick={jump}>Jump by 10</button>
    </div>
  )
}

export default UseState