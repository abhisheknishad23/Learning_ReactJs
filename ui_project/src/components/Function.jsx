import React from 'react'

const Function = () => {
    function btnClicked(){
        console.log("hello")
    }

    function mouseEnter(){
        console.log('mouse entered')
    }
  return (
    <div>
        <button onMouseEnter={mouseEnter} onClick={btnClicked}>click function</button>
    </div>
  )
}

export default Function