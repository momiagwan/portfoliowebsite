import React from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Holy places",
    description: "A website about all holy places and shrines their maps and info acc to islam",
    image: "/id 3.png", 
    Link:"https://holy-places.vercel.app/"
  },
  {
    id: 2,
    title: "Visualr",
    description: "A programming tool wesite.",
    image: "/id 2.png", 
    Link:"https://visualr.vercel.app/"
    
  },
  {
    id: 3,
    title: "ecommerce site",
    description: "a project of ecommerce where u can purchase your needs all at home",
    image: "/id 1.png", 
    Link:"https://hackathon-project-black.vercel.app"
  },
];

const Projects: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">PROJECTS</h2>
          <p className="text-gray-400">Some of my recent works</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
                <a  href={project.Link}
          target="_blank">
              <img 
                src={project.image}
                alt={project.title}
                
                
                className="rounded-t-lg w-full h-48 object-cover"
              /></a>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
