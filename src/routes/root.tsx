import Navbar from '../components/NavBar.tsx'
import AboutMe from '../components/about-me.tsx'
import Contact from '../components/contact.tsx'
import Projects from '../components/projects.tsx'

export default function Root() {
    return (
        <div className="scroll-smooth font-proxima ">
            <div id='portfolio'>
                <Navbar />
                <div id='about-me'>
                    <AboutMe />
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
