import { useState } from "react";

export default function Summary() {
  const [summary, setSummary] = useState<string>(
    "Hey there! I'm a passionate student with a knack for Python programming and a love for web development. I'm super pumped about joining CodeAlpha's Training + Internship program, where I can dive deep into learning and contribute my skills to real-world projects."
  );

  const handleSummaryChange = (value: string) => {
    setSummary(value);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Summary</h2>
      <p
        className="text-gray-700 cursor-pointer border border-transparent focus:border-gray-300 rounded px-2 py-1"
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => handleSummaryChange(e.currentTarget.textContent || "")}
      >
        {summary}
      </p>
    </div>
  );
}
