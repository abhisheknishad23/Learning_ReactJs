import React from 'react'

const props = (props) => {
    console.log(props)
  return (
    <div className='props'>
        <h1>THIS IS PROPS <br></br>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias harum labore distinctio ipsum hic vitae, deserunt cum, delectus iure pariatur blanditiis provident quisquam fugit facere sapiente laudantium veritatis recusandae aperiam?</p>
    </div>
  )
}

export default props