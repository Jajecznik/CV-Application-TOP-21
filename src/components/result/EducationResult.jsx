import EducationContentResult from "./EducationContentResult";

function EducationResult({ educationData }) {
  const id = crypto.randomUUID();
  const entries = Object.entries(educationData).length
    ? Object.entries(educationData)
    : [[id, {}]];

  return (
    <>
      {entries.map(([id, eduData], index) => (
        <div className={index > 0 ? 'resultContentItem' : {}} key={id}>
          <EducationContentResult
            data={eduData}
          />
        </div>
      ))}
    </>
  );
}

export default EducationResult;