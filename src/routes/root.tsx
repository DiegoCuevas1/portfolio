import Landing from '../components/Landing.tsx'
import Navbar from '../components/NavBar.tsx'
import AboutMe from './about-me.tsx'

export default function Root() {
    return (
        <div className="scroll-smooth font-proxima ">
            <Landing />
            <div id='portfolio'>
                <Navbar />
                <AboutMe />
            </div>
        </div>
    )
}
