import { defaultStrings } from "../../utils/data";

function JobExperienceContentResult({ data }) {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <p>
            <b>Job position:</b> {data.jobPosition || defaultStrings.jobPosition}
          </p>
          <p>
            <b>Company:</b> {data.company || defaultStrings.company}
          </p>
        </div>
        <div>
          <p><b>From: </b> {data.jobExperienceFromDate || defaultStrings.jobExperienceFromDate}</p>
          <p><b>To: </b> {data.jobExperienceToDate || defaultStrings.jobExperienceToDate}</p>
        </div>
      </div>
      <p>
        <b>Responsibilities:</b> {data.responsibilities || defaultStrings.responsibilities}
      </p>
    </>
  );
}

export default JobExperienceContentResult;