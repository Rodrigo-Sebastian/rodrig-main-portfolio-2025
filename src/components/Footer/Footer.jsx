import React from 'react'

const Footer = () => {
  return (
    <div className='footer p-4 text-white '>
        <div className='flex flex-col lg:flex-row items-center gap-4 justify-between lg:w-[1480px] lg:m-auto'>
            <h1 className='text-sm'>Rodrigo Sebastian</h1>
            <p className='text-sm'>&copy; alla rättigheter tillhör skaparen</p>
            <p className='text-sm'>version: 1.0.0</p>
        </div>
    </div>
  )
}

export default Footer