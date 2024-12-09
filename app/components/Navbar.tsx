import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
       
        <a href="#home" className="text-white text-xl font-bold">
          Portfolio
        </a>
        <div className="flex space-x-4">
        
          <a href="#about" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#skills" className="text-gray-300 hover:text-white">
            Skills
          </a>
          <a href="#projects" className="text-gray-300 hover:text-white">
            projects
          </a>
          <a href="#Education" className="text-gray-300 hover:text-white">
           Education
          </a>
          <a href="#Certification" className="text-gray-300 hover:text-white">
           Certification
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
