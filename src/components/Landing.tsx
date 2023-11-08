import {AiOutlineDown} from 'react-icons/ai'
export default function Landing()
{
    return(
        <div className="bg-darkblue h-screen flex flex-col  justify-center items-center">
            <div className='flex'>
                <p>
                    <span className="text-4xl text-white md:text-6xl md:text-center ">Hey! I'm <span className="text-[#08294c] bg-white p-1">Diego Cuevas.</span></span>
                </p>
            </div>
            <div className='flex flex-row mt-8'>
                <div>
                    <p className='text-center md:text-left text-2xl px-8 md:px-0 text-white md:text-[1.5em] md:w-[30vw]'>
                      I am a newly graduated Full-Stack Developer with a focus in User Experience and a passion in Accessibility.
                    </p>
                </div>
                <div className="hidden md:block mt-6 transform hover:scale-150 transition-transform duration-500"><a href="#portfolio" className="flex text-darkblue rounded-full p-2 text-5xl bg-white"><AiOutlineDown /></a></div>
            </div>
        </div>
    )
}