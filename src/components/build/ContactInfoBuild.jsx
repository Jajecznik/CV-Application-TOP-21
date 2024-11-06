import UserInput from "./shared/UserInput";

function ContactInfoBuild({ cvData, setCvData }) {
  return (
    <>
      <UserInput
        label="E-mail"
        type="email"
        category="contactInfo"
        subCategory="email"
        cvData={cvData}
        setCvData={setCvData}
      />

      <UserInput
        label="Phone number"
        type="tel"
        category="contactInfo"
        subCategory="phoneNumber"
        cvData={cvData}
        setCvData={setCvData}
      />
    </>
  );
}

export default ContactInfoBuild;
