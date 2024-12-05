"use client"

import Beader from "../components/Beader";
import Summary from "../components/Summary";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Skills from "../components/Skills";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const Home: React.FC = () => {
  const handleDownloadPDF = async () => {
    const element = document.getElementById("resume");
  
    // Ensure the element is available and of the correct type
    if (element instanceof HTMLElement) {
      const canvas = await html2canvas(element, {
        scale: 2, // Adjust the resolution if needed
        width: 595, // A4 width in pixels (210mm * 2.85)
        height: 842, // A4 height in pixels (297mm * 2.85)
        useCORS: true, // Enable CORS if images are used from external sources
      });// Render the content to canvas
      const imgData = canvas.toDataURL("image/png"); // Convert canvas to PNG
  
      const pdf = new jsPDF("p", "mm", "a4"); // Portrait orientation, A4 size
      const pdfWidth = pdf.internal.pageSize.getWidth(); // Get the width of the PDF page
      const pdfHeight = pdf.internal.pageSize.getHeight(); // Get the height of the PDF page
  
      // Calculate the height of the image that will fit the PDF width
      const imageHeight = (canvas.height * pdfWidth) / canvas.width;
  
      let remainingHeight = imageHeight; // Track the remaining content to add
      let offsetY = 0; // Vertical offset for the image
  
      // Add the first page
      pdf.addImage(imgData, "PNG", 0, offsetY, pdfWidth, imageHeight);
      remainingHeight -= pdfHeight;
  
      // If the content is taller than the page, break it into multiple pages
      while (remainingHeight > 0) {
        // Shift the offset for the next page (content continues from where it left off)
        offsetY = -(imageHeight - remainingHeight); // Adjust for the cropped portion
  
        // Add a new page and continue the image from where it was cropped
        pdf.addPage(); 
        pdf.addImage(imgData, "PNG", 0, offsetY, pdfWidth, imageHeight); // Add the content to the new page
        remainingHeight -= pdfHeight; // Decrease the remaining height
      }
  
      // Save the PDF
      pdf.save("resume.pdf");
    } else {
      console.error("The element with ID 'resume' was not found.");
    }
  };
  
  

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6" id="resume">
        <Beader />
        <Summary />
        <WorkExperience />
        <Projects />
        <Education />
        <Skills />
      </div>
      <div className="text-center mt-6">
        <button
          onClick={handleDownloadPDF}
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default Home;
