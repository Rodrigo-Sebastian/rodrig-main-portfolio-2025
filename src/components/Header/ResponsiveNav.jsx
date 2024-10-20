import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { PiSquaresFourThin, PiFileCodeThin, PiPaperPlaneTiltLight   } from "react-icons/pi";
import DarkModeToggle from '../Darkmode/DarkModeToggle';
import { TfiHome } from "react-icons/tfi";
import { CiCircleInfo } from "react-icons/ci";


const NavLinks = [
    { name: 'Hem', href: '#hem', icon: <TfiHome />},
    { name: 'Om', href: '#om', icon: <CiCircleInfo /> },
    { name: 'Projekt', href: '#projekt', icon: <PiFileCodeThin /> },
    { name: 'Kontakt', href: '#kontakt', icon: <PiPaperPlaneTiltLight /> },    
];


const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
    <button className='text-4xl text-white' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <IoCloseOutline/> : <PiSquaresFourThin />        }
    </button>
    <div className={`responsiveNav bg-gradiant max-w-[80%] z-50 rounded-2xl fixed bottom-0 left-1/2 transform -translate-x-1/2 transition-transform duration-300 ease-in-out
                    ${menuOpen ? 'translate-y-0 bottom-4' : 'translate-y-full'}`}>
        <ul className='flex flex-row text-sm items-center p-4 gap-8 text-white'>
            {NavLinks.map((link) => (
                <li className="relative group" key={link.name}>
                    <a className='flex flex-col items-center gap-2 text-[13px]' href={link.href}>
                        <span className='text-xl'>{link.icon}</span>
                        {link.name}</a>
                    <span className="absolute left-0 top-15 h-0.5 w-full bg-blue-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </li>
            ))}
            <DarkModeToggle/>
        </ul>
    </div>
</div>

  )
}

export default Nav