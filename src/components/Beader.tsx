import { useState } from "react";

type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
  github: string;
};

export default function Beader() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: "Syed Afraz Hussain",
    email: "afrazsajid55@gmail.com",
    phone: "+92 321-2051546",
    github: "https://github.com/Afrazsajid",
  });

  const handleChange = (field: keyof PersonalInfo, value: string) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="text-center mb-6">
      <h1
        className="text-3xl font-bold cursor-pointer"
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => handleChange("name", e.currentTarget.textContent || "")}
      >
        {personalInfo.name}
      </h1>
      <p className="text-gray-600">
        <span
          className="cursor-pointer"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => handleChange("email", e.currentTarget.textContent || "")}
        >
          {personalInfo.email}
        </span>{" "}
        |{" "}
        <span
          className="cursor-pointer"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => handleChange("phone", e.currentTarget.textContent || "")}
        >
          {personalInfo.phone}
        </span>{" "}
        |{" "}
        <a
          href={personalInfo.github}
          target="_blank"
          className="text-gray-600 underline"
        >
          <span
            className="cursor-pointer"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleChange("github", e.currentTarget.textContent || "")}
          >
            {personalInfo.github}
          </span>
        </a>
      </p>
    </div>
  );
}
