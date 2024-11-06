import { defaultStrings } from "../../utils/data";

function ContactInfoResult({ email, phoneNumber }) {
  return (
    <>
      <p>
        <b>E-mail:</b> {email || defaultStrings.email}
      </p>
      <p>
        <b>Phone number:</b> {phoneNumber || defaultStrings.phoneNumber}
      </p>
    </>
  );
}

export default ContactInfoResult;