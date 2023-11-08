import {useState} from 'react'
import Card from './card'
export default function Skills()
{
    const [skills] = useState([
        { name: 'React', icon: 'fa-react' },
        { name: 'Python',icon: 'fa-python'},
        { name: 'Git', icon: 'fa-git'},
        { name: 'AWS', icon: 'fa-aws'},
        { name: 'Java', icon: 'fa-java'},
        { name: 'Bilingual', icon:'fa-bilingual' },
        { name: 'Figma', icon: 'fa-figma'},
        { name: 'Collaboration' ,icon: 'fa-comms'},
        { name: 'Scrums', icon: 'fa-scrum'},
        { name: 'Tech Writing', icon:'fa-writing'}
        // Add more skills as needed
      ]);
      
    return(
        <div className="flex flex-col bg-blue-200 pt-4 pb-6">
            <h2 className='text-4xl mx-auto text-darkblue'>Relevant Skills</h2>
            <div className="md:px-8 grid md:grid-cols-5 grid-cols-2 gap-6 mx-auto mt-4">
                {skills.map((skill, index) => (
                <Card key={index} skill={skill} />
                ))}
            </div>
        </div>
    )
}