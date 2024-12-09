import React from 'react';

const About: React.FC = () => {
  return (
    <section className="h-screen bg-blue-600 text-white flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
      <p className="text-xl mt-4">Hi, I'm Muhaimin Asif.</p>
      <a href="http://resuma-mu.vercel.app" className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg shadow">
        Learn More
      </a>
    </section>
  );
};

export default About;