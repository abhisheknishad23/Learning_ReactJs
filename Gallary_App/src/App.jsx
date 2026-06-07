import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {

const [userData, setUserData] = useState([]);

const [index, setIndex]=useState(1)

  const getdata = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=40`)

    setUserData(response.data)
    //console.log(response.data)

  }

  useEffect(function(){
    getdata
  },[index])

  let printUserData = 'No user data available'

  if(userData.length>0){
    printUserData = userData.map(function(elem, idx){

      return <div >
        <a href={elem.url} target='_blank'></a>
        <div className='h-40 w-44 overflow-hidden'>
          <img className='h-full w-full object-cover' src={elem.download_url} alt='' ></img>
      </div>
      <h2>{elem.author}</h2>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen p-4 text-white'>
      {/* <button onClick={getdata} className='bg-green-400 mt-4 text-white py-2 active:scale-78 px-4 rounded ml-4' >
        Get Data
      </button> */}

      <div className='flex flex-wrap gap-2'>
       {printUserData}
      </div> 

      <div className='flex justify-center gap-4 items-center p-2'>
        <button onClick={()=>{
          if(index>1){
            setIndex(index-1)
          }
        }} className='bg-amber-700 text-sm cursor-pointer px-2 py-1 rounded active:scale-50'>Prev</button>
        <button onClick={()=>{setIndex(index+1)}} className='bg-amber-700 text-sm cursor-pointer px-2 py-1 rounded active:scale-50'>Next</button>
      </div>
    </div>
  )
}

export default App
