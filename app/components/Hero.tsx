const Hero:React.FC = () => {
    return (
      <section className="min-h-screen flex items-center justify-center text-center bg-zinc-700	">
        <div>
          <img
            src="/profile-pic.jpeg" 
            alt="Profile Picture"
            className="w-40 h-40 mx-auto rounded-full border-4 border-accent"
          />
          <h1 className="text-4xl font-bold mt-4">Hi, I am Muhaimin</h1>
          <p className="text-lg mt-2 text-amber-400">
            I am a motivated and versatile individual, passionate about creating
            amazing projects.
          </p>
          <a
            href="http://resuma-mu.vercel.app" 
            className="mt-6 inline-block bg-accent text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Check Resume
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
  