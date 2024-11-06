import JobExperienceContentResult from "./JobExperienceContentResult";

function JobExperienceResult({ jobExperienceData }) {
  const id = crypto.randomUUID();
  const entries = Object.entries(jobExperienceData).length
    ? Object.entries(jobExperienceData)
    : [[id, {}]];

  return (
    <>
      {entries.map(([id, jobData], index) => (
        <div className={index > 0 ? 'resultContentItem' : {}} key={id}>
          <JobExperienceContentResult
            data={jobData}
          />
        </div >
      ))}
    </>
  );
}

export default JobExperienceResult;