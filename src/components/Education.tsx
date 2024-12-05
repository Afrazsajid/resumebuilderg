export default function Education() {
    const education = [
      {
        degree: "HSSC - Pre-Engineering",
        institution: "SM Science College, Karachi, Pakistan",
        year: "2025",
      },
      {
        degree: "Matriculation",
        institution: "Adamjee Model School, Karachi, Pakistan",
        year: "2023",
        details: [
          "84% score in matriculation exams.",
          "Represented my school in Board of Secondary Speech Competition, showcasing workplace skills.",
        ],
      },
      {
        degree: "Matriculation",
        institution: "Adamjee Model School, Karachi, Pakistan",
        year: "2023",
        details: [
          "84% score in matriculation exams.",
          "Represented my school in Board of Secondary Speech Competition, showcasing workplace skills.",
        ],
      },
    ];
  
    return (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold text-gray-800">{edu.degree}</h3>
            <p className="text-gray-600 italic">{edu.institution} - {edu.year}</p>
            {edu.details && (
              <ul className="list-disc pl-6 text-gray-700">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  }
  