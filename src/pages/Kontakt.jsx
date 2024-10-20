import React from 'react'
import { PiPhoneThin } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from '../images/rodrigo-logo.png';


const kontaktInfo = [
    {
        telefon: "+46 70 776 46 23",
        mail: "rodrigo.seb93@gmail.com",
        github: {
            text: "Github",
            link: "https://github.com/Rodrigo-Sebastian"
        }
    }
];

const Kontakt = () => {
  return (
    <div id='kontakt' className='mt-28 mx-4 bg-beige rounded-xl p-6 lg:w-[1680px] lg:m-auto lg:mb-20 lg:mt-32 flex flex-col lg:items-center mb-20'>
        <div className='lg:w-[1250px] flex flex-col justify-center'>
            <h1 className='text-2xl mt-4 text-black'>Kontakt</h1>
            <span className='w-full h-[1px] block bg-gray-300 mt-4'></span>
            <div className='flex flex-col gap-8'>
                <div className='top-col. mt-4'>
                    <div className='flex-1 flex-col gap-4'>
                        <p className='mt-4 text-xs font-bold text-gray-500 lg:text-sm'>Tack för att du tog tiden till att besöka denna hemsida</p>
                        <h1 className='mt-4 text-2xl text-black font-bold lg:text-4xl lg:mt-4'>Låt oss börja sammarbeta!</h1>
                    </div>
                    <div className='formular flex-1'>
                        
                    </div>
                </div>
                <div className='flex flex-col gap-4 lg:flex-row'>
                    <div className="p-2 lg:flex-1">
                        <h1 className='font-bold lg:text-xl text-black'>2år:s erfarenhet inom Frontend</h1>
                        <p className='text-gray-500 mt-4'>Under dessa två år har jag lärt mig grunderna och byggstenarna inom webbutveckling, med särskilt fokus på frontend.</p>
                    </div>
                    <div className="p-2 lg:flex-1">
                        <h1 className='font-bold lg:text-xl text-black'>Utbildning: Chas Academy</h1>
                        <p className='text-gray-500 mt-4'>Jag har studerat Frontend-utveckling på Chas Academy, en välrenommerad högskola inom tech och webbutveckling.</p>
                    </div>
                    <div className="p-2 lg:flex-1">
                        <h1 className='font-bold lg:text-xl text-black'>Vad jag kan bidra med!</h1>
                        <p className='text-gray-500 mt-4'>Som nuvarande student kan jag bidra med ett stort engagemang för utveckling och en bred kunskap inom grunderna samt avancerade färdigheter inom frontend-utveckling. Mitt mål som student, praktikant och framtida frontend-utvecklare är att alltid ge mitt yttersta för att leverera utmärkt UX, UI och webblösningar.</p>
                    </div>
                </div>
            </div>
            <div className='border p-8 rounded-xl bg-slate-500 mt-8 flex lg:flex-row flex-col items-center justify-between gap-10'>
                <div>
                    <h1 className='font-bold lg:text-2xl text-white'>Du kan nå mig via, Telefon & E-post!</h1>
                    <div className='flex flex-col gap-4 mt-4'>
                        <div className='flex items-center gap-2'>
                        <PiPhoneThin className='text-xl text-white' />
                        <h3 className='lg:text-xl font-semibold text-white'>Telefon</h3>
                        </div>
                        <p className='text-white'>{kontaktInfo[0].telefon}</p>
                    </div>
                    <div className='flex flex-col gap-4 mt-4'>
                        <div className='flex items-center gap-2'>
                        <TfiEmail className='text-xl text-white' />
                        <h3 className='lg:text-xl font-semibold text-white'>mail</h3>
                        </div>
                        <p className='text-white'>{kontaktInfo[0].mail}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-xl font-semibold text-white text-center'>Social</h1>
                    <a className='p-2 w-[150px] rounded-lg bg-blue-400 transition duration-300 ease-in-out hover:bg-blue-300 text-white text-center flex items-center justify-center gap-2' target='blank' href='https://www.linkedin.com/in/rodrigo-sebastian-carhuapoma-ruiz-155844324/'><FaLinkedin /> Linkedin</a>
                    <a className='p-2 w-[150px] rounded-lg bg-black transition duration-300 ease-in-out hover:bg-blue-400 text-white text-center flex items-center justify-center gap-2' target='blank' href='https://github.com/Rodrigo-Sebastian'><FaGithub/> Github</a>
                </div>
                <div>
                 <img src={Logo} width={200} height={50}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Kontakt