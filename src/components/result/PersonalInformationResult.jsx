import { defaultStrings } from "../../utils/data";

function PersonalInformationResult({ firstName, lastName, dateOfBirth }) {
  return (
    <>
      <p>
        <b>Name:</b> {firstName || defaultStrings.firstName} {lastName || defaultStrings.lastName}
      </p>
      <p>
        <b>Date of birth:</b> {dateOfBirth || defaultStrings.dateOfBirth}
      </p>
    </>
  );
}

export default PersonalInformationResult;