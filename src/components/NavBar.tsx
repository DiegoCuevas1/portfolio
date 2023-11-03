function Navbar() {
  return (
    <nav className="font-proxima space-y-4 flex flex-col mt-8">
      <div className="flex mx-auto">
        <h1 className="text-darkblue text-7xl">Diego Cuevas</h1>
      </div>
      <div className="flex flex-row mx-auto">
        <ul className="text-darkblue space-x-4 flex text-2xl">
            <a href="#about-me" className="hover:underline">About Me</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;