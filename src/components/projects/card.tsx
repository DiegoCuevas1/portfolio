import { AiFillGithub } from 'react-icons/ai';

export type ProjectProps = {
    name: string,
    title: string,
    description: string,
    date: string,
    github: string
    image:string
};

type CardProps = {
    project: ProjectProps,
};



export default function Card({ project }: CardProps) {
    return (
        <div  className="relative group flex flex-col bg-[#fff] p-4 rounded-md border-2 border-darkblue transition-all">
            <div className="flex items-center">
                <p className="font-bold text-lg ">{project.name}</p>
                <p className="items-center ml-auto">{project.date}</p>
            </div>
            <p className='italic'>{project.title}</p>
            <p>{project.description}</p>
            {project.github !== '' && (
                <p className='flex mt-2'>
                    <a
                        target='_blank'
                        className='bg-[#ccc] p-2 rounded-md inline-flex items-center mx-auto text-lg border-2 border-black hover:text-[#fff] hover:bg-[#000] active:bg-[#5A5A5A] space-x-[3px] '
                        href={project.github}
                    >
                        <span>View on Github</span> <span><AiFillGithub /></span>
                    </a>
                </p>
            )}
        </div>
    );
}
