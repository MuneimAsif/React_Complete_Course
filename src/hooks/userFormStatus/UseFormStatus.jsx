// It tells us whether the form has been submitted or not (T/F)

import { useFormStatus } from "react-dom";

// It only works inside a function that's why using it as a component inside a function
const UseFormStatus = () => {
  const handleSubmit = async () => {
    await new Promise(res => setTimeout(res, 2000));
    console.log("Submit");
  };
  function Form (){
    const { pending } = useFormStatus(); // useFormStatus not working, maybe will work in a latest version of react
    console.log(pending);
    return (
      <div>
        <input type="text" placeholder="Enter name" />
        <br />
        <br />
        <input type="text" placeholder="Enter password" />
        <br />
        <br />
        <button disabled = {pending}></button>
      </div>
    );
  };
  return (
    <>
      <form action={handleSubmit}>
        <Form />
      </form>
    </>
  );
};
export default UseFormStatus;
