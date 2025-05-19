const projects = [
    { title: "Pasapalabra", description: "A custom overlay for OBS of the famous Pasapalabra TV show.", link: "/guillermo-garijo.github.io/projects/pasapalabra" },
    { title: "Bodega las Candelas", description: "Custom web page for the restaurant Bodega las Candelas.", link: "https://bodegalascandelas.com/" },
    { title: "fsutils", description: "Utility to read EXT2 and FAT16 filesystems.", link: "https://github.com/guillermo-garijo/fsutils" },
    { title: "Sins Of The Forgotten", description: "Unreal Engine 5 psychological terror game.", link: "https://github.com/yourusername/project2" }
    
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="p-10 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center">My Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a key={index} href={project.link} className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </a>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  