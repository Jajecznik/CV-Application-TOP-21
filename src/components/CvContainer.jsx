import { useState } from "react";
import CvBuilder from "./build/CvBuilder";
import CvResult from "./result/CvResult";

function CvContainer() {
  const [cvData, setCvData] = useState({
    summary: '',
    personalInformation: {},
    contactInfo: {},
    jobExperience: {},
    education: {},
    technicalSkills: [],
    languages: []
  });

  return (
    <div className="w-full max-w-screen-2xl mx-auto pt-4 
      flex flex-col md:flex-row gap-y-4 md:gap-x-4 md:gap-y-0">
      <CvBuilder
        cvData={cvData}
        setCvData={setCvData}
      />
      <CvResult
        cvData={cvData}
      />
    </div>
  );
}

export default CvContainer;
