import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [title, setTitle] = useState('')
  const [details, setDetails]=useState('')

  const [task, setTask] = useState([])


  const submit = (e)=>{
    e.preventDefault()
    // console.log('form submitted')
    // console.log(title)
    // console.log(details)

    const copyTask=[...task];
    
    copyTask.push({title,details})
    setTask(copyTask)
    //console.log(task)

    setTitle('')
    setDetails('')
  }

  const deleteNote = ()=>{
    console.log('deleted')
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
          <button className='bg-white active:bg-amber-600 w-full ouline-none text-black px-5 py-2'>Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-90 overflow-auto'>
          {task.map(function(elem, idx){

            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 bg-cover py-8 w-40 rounded-xl p-4 text-black bg-white bg-[url('')]">
              <div>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-4 leading-tight font-medium text-pink-700'>{elem.details}</p>
              </div>
              <button onClick={deleteNote} className='w-full cursor-pointer active:scale-90 bg-amber-800 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
            
          })}
        </div>
      </div>
    </div>

  )
}

export default App
