import UserInput from "./shared/UserInput";

function SummaryBuild({ cvData, setCvData }) {
  return (
    <UserInput
      label="Short description about you"
      type="textarea"
      category="summary"
      subCategory={null}
      cvData={cvData}
      setCvData={setCvData}
    />
  );
}

export default SummaryBuild;
