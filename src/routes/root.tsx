import Navbar from '../components/NavBar.tsx'
import AboutMe from '../components/about-me.tsx'
import Contact from '../components/contact.tsx'
import Projects from '../components/projects.tsx'
import Skills from '../components/skills/skills.tsx'

export default function Root() {
    return (
        <div className="scroll-smooth font-proxima bg-white">
            <div id='portfolio'>
                <Navbar />
                <div className='my-4' id='about-me'>
                    <AboutMe />
                </div>
                <div>
                    <Skills />
                </div>
                <div id='projects'>
                    <Projects />
                </div>
                <div id='contact'>
                    <Contact />
                </div>
            </div>
        </div>
    )
}
