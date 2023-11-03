import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="font-proxima space-y-4 flex flex-col mt-8">
      <div className="flex mx-auto">
        <h1 className="text-7xl">Diego Cuevas</h1>
      </div>
      <div className="flex flex-row mx-auto">
        <ul className="space-x-4 flex text-xl">
            <Link to="/about-me"><p>About Me</p></Link>
            <Link to="/portfolio"><p>Projects</p></Link>
            <Link to="/portfolio"><p>Contact</p></Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;