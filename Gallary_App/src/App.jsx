import { useState } from 'react'


function App() {

  const getdata =()=>{
    console.log('a gya data')
  }

  return (
    <div className='bg-black h-screen p-4'>
      <button onClick={getdata} className='bg-green-400 mt-4 text-white py-2 active:scale-78 px-4 rounded ml-4' >
        Get Data
      </button>
    </div>
  )
}

export default App
