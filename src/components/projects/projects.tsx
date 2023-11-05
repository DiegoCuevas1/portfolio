import { useState } from 'react'
import Card from './card';
export default function Projects()
{
    const [projects] = useState([
        {name:'Grey Graphics Website', title:'Full Stack Web Developer', description:'A freelance project to create the website for a Screen Printing company in New Jersey. Built the frontend using React/TailwindCSS, backend created with ExpressJS, and deployed using AWS Cloud services.',date:'Summer 2023',github:'https://github.com/DiegoCuevas1/GreyGraphics'},
        {name:'Greatings Frontend Website', title:'Frontend Designer & Developer',description:'Collaborated as part of a Frontend Development team to create the frontend of Greatings, a social media app. Designed wireframes using Figma, and later implemented using React/TailwindCSS.',date:'Fall 2023',github:''}

    ]);
    return(
        <div className="flex flex-col space-y-4 pt-4">
            <h2 className="text-4xl mx-auto text-darkblue">Projects</h2>
            <div className="flex space-x-4 mx-auto">
                <div className='flex flex-col space-y-8'>
                {projects.map((project, index) => (
                    <div className='flex w-[26rem]'>
                        <Card key={index} project={project} />
                    </div>
                    )
                )}
                </div>
            </div>
            
        </div>
    )
}