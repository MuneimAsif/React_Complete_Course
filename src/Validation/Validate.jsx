import { useState } from "react";

const Validate = () => {
  const [name, setName] = useState(" ");
  const [nameErr, setNameErr] = useState();
  const [password, setPassword] = useState(" ");
  const [passError, setPassError] = useState();

  const handleName = (e) => {
    let nameText = e.target.value;
    if (nameText.length > 5) {
      setNameErr("Only 5 characters allowed");
    } else {
      setNameErr(" ");
    }
  };
  const handlePassword = (e) => {
    let passText = e.target.value;
    let regex = /^[A-Z0-9] + $/i;
    if (regex.test(passText)) {
      setPassError();
    } else {
      setPassError("Special characters not allowed");
    }
  };
  return (
    <>
      <input type="text" onChange={handleName} placeholder="Enter name" />
      <span>{nameErr && nameErr}</span>
      <br />
      <br />
      <input
        type="text"
        onChange={handlePassword}
        placeholder="Enter password"
      />
      <span>{passError && passError}</span>
      <br />
      <br />
      <button disabled={passError || nameErr}>Login</button>
    </>
  );
};
export default Validate;
