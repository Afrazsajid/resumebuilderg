import { useState } from "react";

type Project = {
  name: string;
  link: string;
  description: string[];
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([
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
      name: "Pygame Algorithm Visualizer",
      link: "https://github.com/Afrazsajid/python_projetcs/tree/main/algorithm%20visualizer",
      description: [
        "Solo project utilizing Pygame for dynamic algorithm visualization.",
        "Inspired by a desire to enhance understanding of sorting and searching algorithms.",
        "Implemented real-time visualization and user interface design to create an interactive learning experience.",
      ],
    },
  ]);

  const handleProjectChange = (index: number, field: keyof Project, value: any) => {
    setProjects((prev) => {
      const newProjects = [...prev];
      newProjects[index][field] = value;
      return newProjects;
    });
  };

  const handleDescriptionChange = (projectIndex: number, descIndex: number, value: string) => {
    setProjects((prev) => {
      const newProjects = [...prev];
      const descriptions = newProjects[projectIndex].description;
      const newDescriptions = [...descriptions];
      newDescriptions[descIndex] = value;
      newProjects[projectIndex].description = newDescriptions;
      return newProjects;
    });
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h3
            className="font-bold text-blue-500 cursor-pointer"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleProjectChange(index, "name", e.currentTarget.textContent || "")}
          >
            {project.name}
          </h3>
          <p
            className="text-blue-500 underline cursor-pointer"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleProjectChange(index, "link", e.currentTarget.textContent || "")}
          >
            {project.link}
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            {project.description.map((item, descIndex) => (
              <li
                key={descIndex}
                className="cursor-pointer"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  handleDescriptionChange(index, descIndex, e.currentTarget.textContent || "")
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
