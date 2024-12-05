import { useState } from "react";

type EducationDetail = {
  degree: string;
  institution: string;
  year: string;
  details?: string[];
};

export default function Education() {
  const [education, setEducation] = useState<EducationDetail[]>([
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
  ]);

  const handleChange = (
    index: number,
    field: keyof EducationDetail,
    value: any
  ) => {
    setEducation((prev) => {
      const newEducation = [...prev];
      newEducation[index][field] = value;
      return newEducation;
    });
  };

  const handleDetailChange = (
    eduIndex: number,
    detailIndex: number,
    value: string
  ) => {
    setEducation((prev) => {
      const newEducation = [...prev];
      const details = newEducation[eduIndex].details ?? []; // Ensure details is not undefined
      const newDetails = [...details];
      newDetails[detailIndex] = value;
      newEducation[eduIndex].details = newDetails;
      return newEducation;
    });
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3
            className="font-bold text-gray-800 cursor-pointer"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleChange(index, "degree", e.currentTarget.textContent || "")}
          >
            {edu.degree}
          </h3>
          <p
            className="text-gray-600 italic cursor-pointer"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleChange(index, "institution", e.currentTarget.textContent || "")}
          >
            {edu.institution} -{" "}
            <span
              className="cursor-pointer"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleChange(index, "year", e.currentTarget.textContent || "")}
            >
              {edu.year}
            </span>
          </p>
          {edu.details && (
            <ul className="list-disc pl-6 text-gray-700">
              {edu.details.map((detail, detailIndex) => (
                <li
                  key={detailIndex}
                  className="cursor-pointer"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleDetailChange(index, detailIndex, e.currentTarget.textContent || "")
                  }
                >
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
