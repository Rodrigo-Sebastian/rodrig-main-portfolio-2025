import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import IlDivino from '../images/il-divino.png';
import Ehandel from '../images/E-handel.png';
import StklmEats from '../images/stklm-eats.png';
import ZoomRedesign from '../images/zoom-redesign.png';
import ChasMovies from '../images/chas-movies.png';

const projects = [
    { id: 1, year: 2023, title: 'IL-Divino', image: IlDivino, link: '/projekt-1', githubLink: 'https://github.com/Rodrigo-Sebastian/IL-Divino-restaurang', description: 'Beskrivning av IL-Divino', about: 'En av mina första projekt, byggd med html, sass & javascript', borderColor: 'border-red-950' },
    { id: 2, year:2024, title: 'STKL-eats', image: StklmEats, link: '/projekt-2', githubLink: 'https://github.com/Rodrigo-Sebastian/stklm-eats', description: 'Design och utveckling av en interaktiv landingsida för Stklm-eat', about: 'En Uber Eats clone, byggd med react.jsm tailwind & next.js', borderColor: 'border-green-800' },
    { id: 3, year:2024, title: 'Zoom-redesign', image: ZoomRedesign, link: '/projekt-3', githubLink: 'https://github.com/Rodrigo-Sebastian/zoom-redesign', description: 'Design och utveckling av en interaktiv landingsida för Stklm-eat', description: 'Beskrivning av Zoom-redesign', about: 'En clonesite av Zoom:s hero-section, byggd med tailwind & React.', borderColor: 'border-yellow-500' },
    { id: 4, year:2024, title: 'E-handel', image: Ehandel, link: '/projekt-4', githubLink: '', description: 'Beskrivning av E-handel', about: 'En Ehandels platform byggd med React.js, Tailwind & Next.js med tillämpad inloggnind och registrerings sidor.', borderColor: 'border-blue-500' },
    { id: 5, year:2024, title: 'Chas-Movies', image: ChasMovies, link: '/projekt-5', githubLink: 'https://github.com/Rodrigo-Sebastian/chas-movies', description: 'Beskrivning av Chas-Movies', about: 'En React & vite movie-app med API ', borderColor: 'border-purple-500' },
];

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === parseInt(projectId)); // Konvertera projectId till ett nummer

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolla till toppen
    }, []);

    if (!project) {
        return <h2>Projektet hittades inte.</h2>;
    }

    return (
        <div className="p-4 mt-20 flex flex-col lg:flex-row lg:justify-between gap-2 lg:w-[1680px] lg:m-auto lg:mt-20">
            <div className='flex-1 flex flex-col gap-8'>
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <p>{project.description}</p>
                <Link to="/projekt" className='bg-black rounded-md text-white text-center px-6 py-4 w-[250px] transition-colors duration-300 ease-out hover:bg-blue-400'>Tillbaka till projekt</Link>
                    <h3 className='font-bold text-xl'>Om Porjektet</h3>
                    <p>{project.about}</p>
                    <h3 className='font-bold text-xl'>År då sida/appen byggdes</h3>
                    <p>{project.year}</p>
                    <p className='font-bold text-xl'>Besök Github Repo:</p>
                    <a href={project.githubLink} target='blank' className='p-4 w-[200px] bg-black rounded-md text-white text-center transition duration-300 ease-in-out hover:bg-blue-400'>Github Repo</a>
            </div>
            <img src={project.image} alt={project.title} className="flex-1 lg:w-[200px] mt-10" />
        </div>
    );
};

export default ProjectDetail;
