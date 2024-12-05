export default function WorkExperience() {
    const experiences = [
      {
        role: "Python Teacher",
        place: "Adamjee Model School, Karachi",
        duration: "June 2023 - July 2023",
        details: [
          "Created a collaborative learning environment, evaluating student progress.",
          "Developed lesson plans and assignments for real-world situations.",
          "Taught Python programming to students through hands-on experiences.",
        ],
      },
      
    ];
  
    return (
      <>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold">{exp.role}</h3>
            <p className="text-gray-600">{exp.place} - {exp.duration}</p>
            <ul className="list-disc pl-6 text-gray-700">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </>
    );
  }
  