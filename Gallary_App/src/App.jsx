import { useState } from 'react'
import axios from 'axios'


function App() {

  const [userData, setUserData]=useState([])

  const getdata = async ()=>{
    const response = await axios.get('https://picsum.photos/id/237/200/300')

    setUserData(response.data)
    console.log(response.data)
  }

  let printUserData = 'No user data available'

  if(userData.length>0){
    printUserData = userData.map(function(elem, idx){

      return <div>
          <img src={elem.thumbnailUrl} alt='' ></img>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen p-4 text-white'>
      <button onClick={getdata} className='bg-green-400 mt-4 text-white py-2 active:scale-78 px-4 rounded ml-4' >
        Get Data
      </button>

      <div>
       {printUserData}
      </div>
    </div>
  )
}

export default App
