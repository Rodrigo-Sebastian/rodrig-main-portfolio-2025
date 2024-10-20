import React, { useEffect, useState } from 'react'
import { PiMoonStarsThin } from "react-icons/pi";
import { PiSunLight } from "react-icons/pi";


const DarkModeToggle = () => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add('dark');
        } else{
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
    <div>
        <button className='text-2xl bg-slate-600 p-2 rounded-full text-white' onClick={() => setDarkMode(!darkMode)}>{darkMode ? <PiSunLight /> : <PiMoonStarsThin />}</button>
    </div>
  )
}

export default DarkModeToggle