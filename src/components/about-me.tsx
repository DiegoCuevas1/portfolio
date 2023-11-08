import './about-me.css'
import {useState} from 'react'
import {AiFillCaretDown} from 'react-icons/ai';
export default function AboutMe()
{
    const [dnid, setDNID] = useState(false);
    const [isBold, setIsBold] = useState(false);

    const toggleBold = () =>
    {
        setIsBold(!isBold);
   }

    const handleDNIDTrigger = () =>
    {
        setDNID(!dnid)
        toggleBold()
    }
    

    return(
        <div className="h-flex">
            <div className="flex flex-col md:flex-row space-x-4 w-full px-4 md:w-[50%] mx-auto">
                <div className='flex flex-col'>
                    <p className="text-lg">
                        <span className='text-darkblue'>
                            Hey again! I'm a creative problem solver and aspring full-stack developer from New Jersey. 
                            I am graduating from The University of Pittsburgh in December 2023.
                            I have always had a passion for Technology, from video games to all things computer, that naturally led me to 
                            my major, 
                        </span>
                        <span className='inline-flex items-center text-darkblue hover:text-blue-600'>
                            <span  className={`underline cursor-pointer ${isBold ? 'font-bold text-[#463047]' : ''} `}
        onClick={handleDNIDTrigger}>
                                Digital Narrative & Interactive Design.
                            </span>
                            <span className={`text-sm ${isBold ? 'text-[#463047]':''}`}>
                                <AiFillCaretDown />
                            </span>
                        </span>
                    
                    </p>
                    <div className='content-container'>
                        {<p className={`hello text-darkblue font-semibold bg-[#ccc] p-4 rounded-lg mt-2 ${dnid ? 'slide-in' : 'slide-out hidden'}`} >
                            Digital Narrative & Interactive Design is an exciting new major at the University of Pittsburgh, at the forefront of digital storytelling and creative problem-solving. This program, a collaborative effort between the English and Computer Science departments, takes students on a journey where technology meets narrative.
                            <div className='mt-2'></div>
                            In my experience, specializing in the Online Media track, I gained a strong foundation in programming, problem-solving, technical writing, and user experience.
                            This major has provided me with a unique skill set that's not only relevant but also essential for a full-stack developer. It's an exciting intersection of creativity and technology, and I'm eager to continue exploring the possibilities it offers in my career.
                        </p>}
                    </div>
                    <p className='text-lg text-darkblue'>I'm a recent graduate of the Digital Narrative & Interactive Design program at the University of Pittsburgh. With a strong foundation in programming, problem-solving, and a flair for creative storytelling, I'm well-prepared to embark on a career as a full-stack developer. My enthusiasm for technology, coupled with a passion for crafting immersive digital experiences, drives my pursuit of innovation at the intersection of creativity and technology.</p>
                 </div>
                <img src="/images/about-me1.jpg" className="my-4 md:my-0 md:w-[20vw] md:h-[25vw] border-4 border-darkblue rounded-lg"/>
            </div>
        </div>
    )
}