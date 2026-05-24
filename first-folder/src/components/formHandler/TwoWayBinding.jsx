import React, { useState } from 'react'

const TwoWayBinding = () => {
    const [title,setTitle]=useState('')

     const submitHandler=(e)=>{
        e.preventDefault()
        console.log('submitted by',title)
        setTitle("")
    }
  return (
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <input type='text' placeholder='enter name' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default TwoWayBinding