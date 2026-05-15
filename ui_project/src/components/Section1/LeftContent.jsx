import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
        <div className='p-6'>
            <h3 className='mb-7 text-7xl font-bold'>Prospective <br></br><span>customer</span><br />segmentation</h3>
            <p className='text-xl font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consectetur alias perspiciatis fugiat quaerat commodi dignissimos, sequi necessitatibus obcaecati eaque.</p>
        </div>
        <div className='text-9xl'>
            <ArrowUpRight />
        </div>

    </div>
  )
}

export default LeftContent