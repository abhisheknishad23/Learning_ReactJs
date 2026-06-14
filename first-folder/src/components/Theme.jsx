import React from 'react'
import props from './Props'

const Theme = (props) => {

    function changeTheme(){
        props.setTheme('Dark')
    }


  return (
    <div>
        <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Theme