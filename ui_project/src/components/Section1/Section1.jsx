import React from 'react'
import Navbar from './Navbar'
import PageContent1 from './PageContent1'

const Section1 = (props) => {
  return (
    <div className=''>
      <Navbar />
      <PageContent1 users={props.users}/>
    </div>
    
  )
}

export default Section1