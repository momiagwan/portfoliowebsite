const Skills:React.FC = () => {
    return (
      <section className="py-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Skills</h2>
          <p className="text-gray-400">
            Here are some of my skills on which I have been working.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-teal-400 rounded-md shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 bg-gray-700 rounded-md text-white ">React.js</span>
              <span className="px-3 py-1 bg-gray-700 rounded-md text-white">Next.js</span>
              <span className="px-3 py-1 bg-gray-700 rounded-md text-white">HTML</span>
              <span className="px-3 py-1 bg-gray-700 rounded-md text-white">CSS</span>
              <span className="px-3 py-1 bg-gray-700 rounded-md text-white">JavaScript</span>
              <span className="px-3 py-1 bg-gray-700 rounded-md text-white">Redux</span>
            </div>
          </div>
          <div className="p-6 bg-teal-400 rounded-md shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 bg-gray-700 rounded-md text-white">Node.js</span>
              <span className="px-3 py-1 bg-gray-700 rounded-md text-white">Express.js</span>
              <span className="px-3 py-1 bg-gray-700 rounded-md text-white">MongoDB</span>
              <span className="px-3 py-1 bg-gray-700 rounded-md text-white">Python</span>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  