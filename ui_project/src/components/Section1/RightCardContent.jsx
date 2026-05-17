import React from 'react'
import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-lg text-white leading-normal mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, inventore harum autem placeat et nobis eum expedita omnis dolore perferendis praesentium sit saepe rerum vero quas earum aperiam itaque eveniet?</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-500 text-white font-medium px-8 py-3 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-500 text-white font-medium px-4 py-3 rounded-full'><ArrowRight /></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent