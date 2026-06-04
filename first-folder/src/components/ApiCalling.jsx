import React, { useState } from "react"
import axios from 'axios'

const ApiCalling = ()=>{

    const [data, setData] = useState([])

    const getapi = async ()=>{
        const response = await axios.get ('https://jsonplaceholder.typicode.com/posts')
       // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        setData(response.data);
    }
    


    return(
        <div>
            <button onClick={getapi}>Get Data</button>
            <div>
                {data.map(function(elem,idx){
                    return <h2>hello{idx} </h2>
                })}

                {/* {data} <h2>heloo</h2> */}
            </div>
        </div>
    )
}

export default ApiCalling