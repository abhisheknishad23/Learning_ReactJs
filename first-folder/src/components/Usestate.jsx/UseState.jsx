import React, { useState } from 'react'

const UseState = () => {
    const [num, setNum]=useState({user:'Abhishk', age:24})
    const btn=()=>{
        const newNum = {...num}
        newNum.user='Falak'
        newNum.age=22
        setNum(newNum)
    }
  return (
    <div>
        <h1>{num.user},{num.age}</h1>
        <button onClick={btn}>Click</button>
    </div>
  )
}

export default UseState