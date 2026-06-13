import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Men from './Men'
import Women from './Women'

const Product = () => {
  return (
    <div>
        <div className='flex justify-center gap-10 py-4'>
            <Link to='/product/men' className='gap-4'>Men</Link>
            <Link to='/product/women'>Women</Link>
       </div>
       
       <Outlet />
    </div>
  )
}

export default Product