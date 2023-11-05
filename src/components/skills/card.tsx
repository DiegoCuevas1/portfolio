type SkillProps = {
    name: string,
    icon: string,
}
export default function Card({skill}:{skill:SkillProps})
{
   
    return(
        <div className="flex flex-col bg-[#fff] p-6 rounded-md border-2 border-darkblue">
            <img src={`/icons/${skill.icon}.png`} className='w-[96px]'/>
            <p className="flex mt-2 justify-center text-darkblue text-md w-[100px]">{skill.name}</p>
        </div>
    )
}
