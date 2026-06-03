import React from "react"

const ApiCalling = ()=>{

    const getapi = async ()=>{
        const response = await fetch ('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        console.log(data);
    }
    


    return(
        <div>
            <button onClick={getapi}>Get Data</button>
        </div>
    )
}

export default ApiCalling