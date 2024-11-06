import UserInput from "./shared/UserInput";

function PersonalInformationBuild({ cvData, setCvData }) {
  return (
    <>
      <UserInput
        label="First name"
        type="text"
        category="personalInformation"
        subCategory="firstName"
        cvData={cvData}
        setCvData={setCvData}
      />

      <UserInput
        label="Last name"
        type="text"
        category="personalInformation"
        subCategory="lastName"
        cvData={cvData}
        setCvData={setCvData}
      />

      <UserInput
        label="Date of birth"
        type="date"
        category="personalInformation"
        subCategory="dateOfBirth"
        cvData={cvData}
        setCvData={setCvData}
      />
    </>
  );
}

export default PersonalInformationBuild;
