export default function Projects() {
    const projects = [
      {
        name: "Groovy Tunes Music",
        link: "https://github.com/Afrazsajid/musicplayer",
        description: [
          "Developed a web-based music player using HTML, CSS, and JavaScript.",
          "Implemented features such as song switching and playlist creation.",
          "Currently working on adding functionality for user-uploaded songs and customizable playlists.",
          "Overcame deployment challenges and continuously improving app functionality.",
        ],
      },
    
      {
        name: "Pygame the Algorithm Visualizer",
        link: "https://github.com/Afrazsajid/python_projetcs/tree/main/algorithm%20visualizer",
        description: [
          "Solo project utilizing Pygame for dynamic algorithm visualization.",
          "Inspired by a desire to enhance understanding of sorting and searching algorithms.",
          "Implemented real-time visualization and user interface design to create an interactive learning experience.",
        ],
      },
    ];
  
    return (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold text-blue-500">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h3>
            <ul className="list-disc pl-6 text-gray-700">
              {project.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  