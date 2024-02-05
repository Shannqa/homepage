function Project() {
  const projects = [
    {
      name: "Battleships Game",
      img: "",
      url: "",
      code: "https://github.com/Shannqa/battleships",
      desc: "Based on the well-known pen and paper battleships game. You can play against the AI."
    },
    {
      name: "CV Generator",
      img: "",
      url: "https://cvgenerator-shannqa.netlify.app/",
      code: "https://github.com/Shannqa/cv-app",
      desc: "Fill out the form with your details and generate a fully-formatted CV which you can download as PDF."
    },
    {
      name: "Memory Game",
      img: "",
      url: "https://memory-shannqa.netlify.app/",
      code: "https://github.com/Shannqa/memory-card",
      desc: ""
    }
  ];
  
  return(
    <div className="recent-projects">
      <h2>Recent Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => {
          <section className="project" key={index}>
            <img src={project.img} alt="Screenshot of the website" />
            <h3>{project.name}</h3>
            <a href={project.url}>Website</a>
            <a href={project.code}>Code</a>
            <p>{project.desc}</p>
          </section>
        })}
      </div>
    </div>  
  )
}

export default Project;