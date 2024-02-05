function Projects() {
  const projects = [
    {
      name: "Battleships Game",
      img: "./assets/battleships-180w.png",
      url: "https://shannqa.github.io/battleships/",
      code: "https://github.com/Shannqa/battleships",
      desc: "Based on the well-known pen and paper battleships game. You can play against the AI."
    },
    {
      name: "CV Generator",
      img: "./assets/battleships-180w.png",
      url: "https://cvgenerator-shannqa.netlify.app/",
      code: "https://github.com/Shannqa/cv-app",
      desc: "Fill out the form with your details and generate a fully-formatted CV which you can download as PDF."
    },
    {
      name: "Memory Game",
      img: "./assets/battleships-180w.png",
      url: "https://memory-shannqa.netlify.app/",
      code: "https://github.com/Shannqa/memory-card",
      desc: "Simple game helping you to train your brain and memory. With cats. Lots of cats."
    }
  ];
  
  return(
    <div className="recent-projects">
      <h2>Recent Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project">
            <a href={project.url}><img src={project.img} alt="Screenshot of the website" /></a>
            <h3>{project.name}</h3>
            <div className="links">
              <a href={project.url}>Website</a>
              <span>||</span>
              <a href={project.code}>Code</a>
            </div>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </div>  
  )
}

export default Projects;