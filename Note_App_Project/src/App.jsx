import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [title, setTitle] = useState('')
  const [details, setDetails]=useState('')


  const submit = (e)=>{
    e.preventDefault()
    console.log('form submitted')
    console.log(title)
    console.log(details)

    setTitle('')
    setDetails('')
  }

  return (
    <div className='h-screen bg-black lg:flex text-white p-10'>
      <form onSubmit={(e)=>{submit(e)}} className='flex gap-4 lg:w-1/2 flex-col items-start p-10'>
          <input type='text' placeholder='Note heading' className='px-5 w-full font-medium py-2 border-2 outline-none rounded' 
          value={title} onChange={(e)=>{
            setTitle(e.target.value)
          }}/>
          <textarea type='text' placeholder='write details' className='px-5 w-full h-32 py-2 flex items-start flex-row border-2 outline-none rounded' 
          value={details} onChange={(e)=>{
            setDetails(e.target.value)
          }}/>
          <button className='bg-white w-full ouline-none text-black px-5 py-2'>Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
        </div>
      </div>
    </div>

  )
}

export default App
