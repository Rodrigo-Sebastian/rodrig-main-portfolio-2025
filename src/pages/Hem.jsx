import React from 'react'
import { CiInstagram, CiLinkedin  } from "react-icons/ci";
import {PiMouseSimpleLight, 
        PiCaretDownThin, 
        PiMailbox, 
        PiGithubLogoThin, 
        PiPaperPlaneTiltLight,
        PiCodeSimpleThin,
        PiCakeThin,
        PiPencilRulerThin,
        PiPaintBrushThin,
    } 
from "react-icons/pi";


const socialIcons = [
    {name: 'instagram', icon:<CiInstagram />, href: 'https://www.instagram.com', class:'instagram'},
    {name: 'github', icon:<PiGithubLogoThin />, href: 'https://www.github.com'},
    {name: 'linkedin', icon:<CiLinkedin />, href: 'https://www.linkedin.com'},

]

const gridItems = [
    {icon:<PiCodeSimpleThin />, text:'Frontend-utvecklare', bgColor: 'bg-gradiant'},
    {icon:<PiCakeThin />, text:'2 års erfarenhet', bgColor: 'bg-beige', color: 'text-black'},
    {icon:<PiPencilRulerThin />, text:'UX & UI anpassning', bgColor: 'bg-slate-700'},
    {icon:<PiPaintBrushThin />, text:'Moderna Layouter', bgColor: 'bg-black'},

]

const Hem = () => {
  return (
    <>
        <div id='hem' className='flex flex-col justify-center items-center gap-8 mt-16 lg:mt-32'>
            <div className='hero-section p-4 lg:w-[1480px] flex flex-col lg:flex-row items-center gap-20'>
            {/* INFO-SECTION */}
                <div className='flex-1 flex flex-col justify-start gap-6'>
                    <div className='flex flex-col items-start gap-6'>
                        <h1 className='text-4xl lg:text-5xl text-start font-bold'>Välkomen till min Portfolio!</h1>
                        <h3 className='text-md lg:w-[650px] text-start lg:text-4xl'>Jag heter Rodrigo och jag studerar till Frontend-utvecklare!<span className='text-4xl'>&#128075;</span></h3>
                        <p className='text-start w-[450px] lg:w-[650px] lg:text-lg'>Här kan du kunna navigera runt i min Portfoljo och ta en titt på deprojekt jag har kodat och utvecklat under de senaste åren.
                             Du kan även läsa om mig och lära känna mig bättre! gillar du det du ser? Tveka inte att kontakta mig!<span className='text-4xl'>&#129331;</span>
                        </p>
                    </div>
                    <div className='flex flex-col items-start gap-4 lg:flex-row lg:gap-10'>
                    <a href="#kontakt" className='flex flex-row gap-2 items-center justify-center text-center bg-gradiant rounded-md w-[220px] h-[45px] lg:h-[50px] text-white shadow-2xl'>
                        <h1>Kontakta mig</h1>
                        <PiMailbox />
                    </a>
                    <a href="#projekt" className='flex flex-row gap-2 items-center justify-center text-center main-btn rounded-md w-[220px] h-[45px] lg:h-[50px] text-white shadow-2xl transition-colors duration-300 ease-out hover:bg-blue-400'>
                        <h1>besök mina projekt</h1>
                        <PiPaperPlaneTiltLight/>
                    </a>
                    </div>
                </div>
                {/*GRID-SECTION */}
                <div className=' grid grid-cols-2 gap-6 p-4'>
                    {gridItems.map((item) => (
                        <div key={item} className={`${item.bgColor} rounded-xl h-[150px] w-[200px] lg:h-[220px] lg:w-[250px] flex flex-col items-start justify-start gap-4 p-8 text-white`}>
                            <span className={`${item.color} text-2xl lg:text-4xl`}>{item.icon}</span>
                            <p className={`${item.color} text-[15px] lg:text-sm`}>{item.text}</p>
                        </div>
                    ))}
                </div>
            {/* ICONS-SECTION */}
                <div>
                    <ul className='text-3xl flex row lg:flex-col gap-5 items-center'>
                        <span className='block w-[100px] h-[1px] lg:w-[1px] lg:h-[100px] bg-black dark:bg-white shadow-2xl'></span>
                        {socialIcons.map((icons) =>(
                            <li className='icon-list transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer' key={icons.name}>
                                <a href={icons.href}>{icons.icon}</a>
                            </li>
                        ))}
                        <span className='block w-[100px] h-[1px] lg:w-[1px] lg:h-[100px] bg-black dark:bg-white'></span>
                    </ul>
                </div>
            </div>
            {/* SCROLL-SECTION */}
            <div className='text-3xl down-animation mt-10 mb-20'>
                <PiMouseSimpleLight />
                <PiCaretDownThin />
            </div>
        </div>
    </>
  )
}

export default Hem