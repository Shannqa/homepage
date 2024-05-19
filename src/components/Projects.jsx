function Projects() {
  const projects = [
    {
      name: "Battleships Game",
      img: "./assets/battleships-225w.png",
      url: "https://shannqa.github.io/battleships/",
      code: "https://github.com/Shannqa/battleships",
      desc: "Based on the well-known pen and paper battleships game. You can play against the AI.",
    },
    {
      name: "Chat App",
      img: "./assets/chat.png",
      url: "https://chat-shannqa.netlify.app/",
      codeClient: "https://github.com/Shannqa/chat-app-client",
      codeServer: "https://github.com/Shannqa/chat-app-server",
      desc: "Fullstack website for chatting with friends, it's an ongoing project. Frontend is built with React, backend with Node (Express). The website uses MongoDB (Mongoose) database, socket.io technology as well as JSON Web Token authentication.",
    },
  ];

  return (
    <div className="recent-projects">
      <h2>Recent Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project">
            <a href={project.url}>
              <img src={project.img} alt="Screenshot of the website" />
            </a>
            <h3>{project.name}</h3>
            <div className="links">
              <a href={project.url}>Website</a>
              <span>||</span>
              {project.code ? (
                <a href={project.code}>Code</a>
              ) : (
                <span>
                  <a href={project.codeClient}>Frontend code</a> ||
                  <a href={project.codeServer}>Backend code</a>
                </span>
              )}
            </div>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
