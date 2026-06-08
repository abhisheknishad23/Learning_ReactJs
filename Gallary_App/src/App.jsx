import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';


function App() {

const [userData, setUserData] = useState([]);

const [index, setIndex]=useState(1)

  const getdata = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=40`)

    setUserData(response.data)
    //console.log(response.data)

  }

  useEffect(function(){
    getdata()
  },[index])

  let printUserData = 'No user data available'

  if(userData.length>0){
    printUserData = userData.map(function(elem, idx){

      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      {/* <button onClick={getdata} className='bg-green-400 mt-4 text-white py-2 active:scale-78 px-4 rounded ml-4' >
        Get Data
      </button> */}

      <div className='flex flex-wrap p-2 gap-2'>
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
