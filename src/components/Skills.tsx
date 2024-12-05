import { useState } from "react";

type Skill = {
  category: string;
  skills: string;
};

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([
    { category: "Front End", skills: "HTML, CSS, JavaScript" },
    { category: "Programming Languages", skills: "Python" },
    { category: "Game Development", skills: "Pygame" },
  ]);

  const handleSkillChange = (index: number, field: keyof Skill, value: string) => {
    setSkills((prev) => {
      const newSkills = [...prev];
      newSkills[index][field] = value;
      return newSkills;
    });
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-100 border border-gray-300 rounded-lg p-4 shadow-md"
          >
            <h3
              className="font-bold text-gray-800 cursor-pointer"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                handleSkillChange(index, "category", e.currentTarget.textContent || "")
              }
            >
              {skill.category}
            </h3>
            <p
              className="text-gray-600 cursor-pointer"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                handleSkillChange(index, "skills", e.currentTarget.textContent || "")
              }
            >
              {skill.skills}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
