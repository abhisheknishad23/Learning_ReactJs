import React from 'react'
import { useParams } from 'react-router-dom'

const ShopDetails = () => {

    const params = useParams()
    console.log(params.id);

  return (
    <div className='absolute font-bold text-4xl w-full items-center flex justify-center underline'>{params.id} ShopDetails</div>
  )
}

export default ShopDetails