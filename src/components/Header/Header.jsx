import React from 'react'
import ResponsiveNav from './ResponsiveNav';
import Nav from './Nav';
import Logo from '../../images/rodrigo-logo.png';

const Header = () => {
  return (
    <>
    <div className='Header-container'>
        <div className='Header flex items-center justify-between p-4'>
            <a href="/" className='text-white hover:text-blue-400'>Hem</a>
            <img className='lg:ml-[26rem]' src={Logo} width={40} height={40}/>
            <div className='nav-link hidden lg:block rounded-full py-1 px-4'>
                <Nav/>
            </div>
            <div className='lg:hidden'>
                <ResponsiveNav/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header