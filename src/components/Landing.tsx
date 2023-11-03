import {AiOutlineDown} from 'react-icons/ai'
export default function Landing()
{
    return(
        <div className="bg-darkblue h-screen flex flex-col justify-center items-center">
            <div className='flex'>
                <p>
                    <span className="text-white text-8xl text-center ">Hey! I'm <span className="text-[#08294c] bg-white p-1">Diego Cuevas.</span></span>
                </p>
            </div>
            <div className='flex flex-row mt-8'>
                <div>
                    <p className='text-white text-[1.5em] w-[30vw]'>
                      I am a newly graduated Full-Stack Developer with a focus in User Experience and a passion in Accessibility.
                    </p>
                </div>
                <div className='mt-6'><a href='#portfolio' className='flex text-darkblue rounded-full p-2 text-5xl bg-white'><AiOutlineDown /></a></div>
            </div>
        </div>
    )
}