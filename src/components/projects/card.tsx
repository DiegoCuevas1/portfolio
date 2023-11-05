import { AiFillGithub } from 'react-icons/ai'
type ProjectProps = {
    name: string,
    title: string,
    description:string,
    date:string,
    github:string
}
export default function Card({project}:{project:ProjectProps})
{
   
    return(
       
        <div className="flex flex-col bg-[#fff] p-4 rounded-md border-2 border-darkblue">
            <div className="flex items-center space-x-20">
                <h3 className="font-bold text-lg text-darkblue">{project.name}</h3>
                <p className="items-center">{project.date}</p>
            </div>
            <p className='italic'>{project.title}</p>
            <p>{project.description}</p>
            {project.github!=='' && (<p className='flex mt-2'><a target='_blank' className='bg-[#ccc] p-2 rounded-md inline-flex items-center mx-auto text-lg border-2 border-black hover:text-[#fff] hover:bg-[#000] space-x-[3px] ' href={project.github}><span>View on Github</span> <span><AiFillGithub /></span></a></p>)}
        </div>
        
    )
}
