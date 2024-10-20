import React from 'react'
import DarkModeToggle from '../Darkmode/DarkModeToggle';
import { Link } from 'react-scroll';


const NavLinks = [
    {name: 'Hem', href: 'hem'},
    { name: 'Om', href: 'om' },
    { name: 'Projekt', href: 'projekt' },
    { name: 'Kontakt', href: 'kontakt' },    
];

const Nav = () => {
  return (
    <div>
        <ul className='flex flex-row items-center gap-14 text-sm text-white'>
            {NavLinks.map((link) => (
                <li className="relative group" key={link.name}>
                    <Link to={link.href} smooth={true} duration={500}>{link.name}</Link>
                    <span className="absolute left-0 top-8 h-0.5 w-full bg-blue-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </li>
            ))}
            <DarkModeToggle/>
        </ul>
    </div>
  )
}

export default Nav