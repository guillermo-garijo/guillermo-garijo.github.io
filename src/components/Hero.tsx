import { Link } from 'react-router-dom';

const Hero = () => {
    return (
      <section className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Hello, I'm Guillermo Garijo Alias 👋</h1>
        <p className="text-xl mt-2">Java | C | Cybersecurity | Python | Reverse Engineering | Game Development</p>
        <Link to="/projects" className="mt-6 px-6 py-3 bg-blue-500 rounded-lg text-white">
          View My Work
        </Link>
  
        {/* Add the quote below the existing content */}
        <blockquote className="mt-12 text-xl italic text-gray-300 max-w-2xl mx-auto">
          "Have you ever put comments on your code? Don’t put comments on your code, code is an art form, and true art should be open to interpretation."
        </blockquote>
      </section>
    );
  };
  
  export default Hero;
  