import { useState } from 'react'
import Card, { ProjectProps } from './card';

export default function Projects()
{
    const [projects] = useState([
        {name:'Grey Graphics Website', title:'Full Stack Web Developer', description:'A freelance project to create the website for a Screen Printing company in New Jersey. Built the frontend using React/TailwindCSS, backend created with ExpressJS, and deployed using AWS Cloud services.',date:'Summer 2023',github:'https://github.com/DiegoCuevas1/GreyGraphics',image:'greygraphics'},
        {name:'Greatings Frontend Website', title:'Frontend Designer & Developer',description:'Collaborated as part of a Frontend Development team to create the frontend of Greatings, a social media app. Designed wireframes using Figma, and later implemented using React/TailwindCSS.',date:'Fall 2023',github:'',image:''},
        {name:'Portfolio Website',title:'Full Stack Web Development', description:'My portfolio created using React/TailwindCSS, and deployed using AWS S3 Buckets and DNS Configuration.',date:'Fall 2023', github:'https://github.com/DiegoCuevas1/portfolio',image:''}
    ] as ProjectProps[]);

    const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

    const handleCardClick = (project:any) =>
    {
        setSelectedProject(project);
    }
    
    return(
        <div className="flex flex-col space-y-4 pt-4">
            <h2 className="text-4xl mx-auto text-darkblue">Projects</h2>
            <p className="underline text-center text-md text-darkblue bg-white">
                Click on a project to View Demo
            </p>
            <div className="flex space-x-4 mx-auto">
                <div className='flex flex-col space-y-8'>
                {projects.map((project) => (
                    <div className='flex w-[26rem]'>
                        <Card project={project} onCardClick={handleCardClick} />
                    </div>
                    )
                )}
                
                </div>
                {selectedProject && (
                    <img 
                        src={`http://diegocuevasnj.com.s3-website.us-east-2.amazonaws.com/images/${selectedProject.image}.png`}
                        alt={selectedProject.name}
                        width={800}
                        height={400}
                        className='border-2 border-black'
                    />
                )}
            </div>
        </div>
    )
}