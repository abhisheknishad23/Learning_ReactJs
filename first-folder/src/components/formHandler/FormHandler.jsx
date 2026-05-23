import React from 'react'

const FormHandler = () => {
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log('submitted')
    }
  return (
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <input type='text' placeholder='enter name' />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FormHandler