export default function Skills() {
    const skills = [
      { category: "Front End", skills: "HTML, CSS, JavaScript" },
      { category: "Programming Languages", skills: "Python" },
      { category: "Game Development", skills: "Pygame" },
      { category: "Game Dvelopment", skills: "Pygyuame" },
    ];
  
    return (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 border border-gray-300 rounded-lg p-4 shadow-md"
            >
              <h3 className="font-bold text-gray-800">{skill.category}:</h3>
              <p className="text-gray-600">{skill.skills}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  