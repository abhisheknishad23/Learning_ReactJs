import React from 'react'

const Hooks = () => {
    let a = 20;
    function changeA(){
        console.log(a);
        a++
        console.log(a);
    }
  return (
    <div><h1>value of a is {a}</h1>
    <button onClick={changeA}>click here</button>
    </div>
  )
}

export default Hooks