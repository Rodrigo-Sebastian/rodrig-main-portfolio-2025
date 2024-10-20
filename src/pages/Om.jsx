import React from 'react'
import { FaWordpress, FaReact, FaSass,FaHtml5, FaCss3,  } from "react-icons/fa6";
import { SiTailwindcss, SiJavascript  } from "react-icons/si";
import Avatar from "../images/avatar-image.png"

const omInfoCard = [
    {title:'Front-end Utvecklare', 
        description:'Student på Chas Academy sedan 2023, med stort intresse för att leverera moderna applikationer',
        bgColor: 'bg-blue-400',
        color: 'text-white',
        icon: <FaWordpress/>,
        iconReact: <FaReact/>,
        iconHtml: <FaHtml5/>,
        iconJavasctipt: <SiJavascript/>,
        iconTailwind: <SiTailwindcss/>,
    },
    {title:'Webbdesign, UX & UI', 
        description:'För mig är det viktigt att både designa och utveckla morderna layouter för framtidens hemsidor.',
        bgColor: 'bg-beige',
        color: 'text-black',
    },
    {title:'Profetionell & Dedikerad till mitt yrke', 
        description:'jag strävar efter att varje dag utvecklas och lära mig mer inom mitt yrke.',
        bgColor: 'bg-black',
        color: 'text-white',
    },
]

const Om = () => {
  return (
    <div id='om' className='lg:mt-32 lg:w-[1680px] mx-4 lg:m-auto'>
        <span className='w-full h-[1px] block bg-gray-200 mb-10'></span>
        <h1 className='text-lg lg:text-2xl mb-10'>Om Mig</h1>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_1fr] gap-6">
        {omInfoCard.map((card, index) => (
          <div 
            key={index} 
            className={`${card.bgColor} lg:h-[450px] lg:w-full flex flex-col items-center gap-10 lg:justify-between p-10 lg:p-12 rounded-lg shadow-lg ${
              index === 0 ? 'lg:col-span-2' : 'lg:col-span-1'
            }`}
          >
            <h2 className={`${card.color} text-xl lg:text-4xl font-bold mb-2`}>{card.title}</h2>
            <div className='flex flex-row items-center gap-10'>
                <span className='lg:text-8xl text-4xl text-white'>{card.icon}</span>
                <span className='lg:text-8xl text-4xl text-white'>{card.iconReact}</span>
                <span className='lg:text-8xl text-4xl text-white'>{card.iconHtml}</span>
                <span className='lg:text-8xl text-4xl text-white'>{card.iconJavasctipt}</span>
                <span className='lg:text-8xl text-4xl text-white'>{card.iconTailwind}</span>

            </div>
            <p className={`${card.color} text-sm lg:text-xl`}>{card.description}</p>
          </div>
        ))}
      </div>
      <div className='flex flex-col lg:flex-row justify-between gap-4 items-center mt-20 pb-10'>
        <div className='flex flex-col gap-10 lg:w-[850px] text-center'>
            <h1 className='font-bold text-lg lg:text-2xl lg:text-start'>"Min främsta egenskap är min vilja att alltid prestera och lära mig mer om mitt yrke och alla dess områden."</h1>
            <p className='text-sm lg:text-xl lg:text-start'>Att vara Frontend-utvecklare har hjälpt mig att utveckla min kreativitet samt förbättra mina färdigheter i att debuga och att ständigt förbättra 
                mina kunskaper inom webbutveckling.
            </p>
        </div>
        <div className='flex flex-row items-center gap-4 mt-4 bg-gradiant rounded-xl p-2 lg:px-10 shadow-2xl'>
            <img src={Avatar} width={100} alt="avatar image"/>
            <div>
                <h1 className='font-bold text-white'>Rodrigo Sebastian C.R</h1>
                <p className='italic text-[12px] lg:text-sm text-white p-2'>Frontend-utvecklare & skapare av denna sida.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Om