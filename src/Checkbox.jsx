import { useState } from "react";

const Checkbox = () => {
  const [skills, setSkills] = useState([]);
  const handleSkills = (e) => {
    let skillVal = e.target.value;
    let skillCheck = e.target.checked;
    if (skillCheck) {
      setSkills([...skills, " ", skillVal]);
    } else {
      setSkills(skills.filter((x) => x != skillVal));
    }
  };
  return (
    <>
      <h3>Select your skills</h3>
      <input onChange={handleSkills} type="checkbox" id="php" value={"php"} />
      <label htmlFor="php">PHP</label>
      <br />
      <input onChange={handleSkills} type="checkbox" id="js" value={"js"} />
      <label htmlFor="js">JS</label>
      <br />
      <input
        onChange={handleSkills}
        type="checkbox"
        id="python"
        value={"python"}
      />
      <label htmlFor="python">Python</label>
      <br />
      <input onChange={handleSkills} type="checkbox" id="java" value={"java"} />
      <label htmlFor="java">Java</label>
      <h1>{skills}</h1>
    </>
  );
};

export default Checkbox;
