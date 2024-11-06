import { defaultStrings } from "../../utils/data";

function EducationContentResult({ data }) {

  return (
    <>
      <div className="flex justify-between">
        <div>
          <p>
            <b>Field of Study:</b> {data.fieldOfStudy || defaultStrings.fieldOfStudy}
          </p>
          <p>
            <b>Institution:</b> {data.institution || defaultStrings.institution}
          </p>
        </div>
        <div>
          <p><b>From: </b> {data.educationFromDate || defaultStrings.educationFromDate}</p>
          <p><b>To: </b> {data.educationToDate || defaultStrings.educationToDate}</p>
        </div>
      </div>
    </>
  );
}

export default EducationContentResult;