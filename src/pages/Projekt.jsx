import React from 'react'
import Carousel from '../components/Carousel/Carousel'

const Projekt = () => {
  return (
    <div id='projekt' className='mt-28 lg:w-[1480px] lg:m-auto lg:mt-32 mx-4'>
        <span className='w-full h-[1px] block bg-gray-200 mb-10'></span>
        <h1 className='text-2xl mb-20'>Mina Projekt</h1>
        <div>
            <Carousel/>
        </div>
    </div>
  )
}

export default Projekt