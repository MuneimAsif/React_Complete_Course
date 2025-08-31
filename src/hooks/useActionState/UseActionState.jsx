import { color } from "framer-motion";
import { useActionState } from "react";

const UseActionState = () => {
  const handleSubmit = async (prevData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    await new Promise((res) => setTimeout(res, 2000));
    if (name && password) {
      return { message: "Form Submitted" };
    } else {
      return { error: "Complete the fields" };
    }
  };
  const [data, action, pending] = useActionState(handleSubmit, undefined);
  return (
    <>
      <form action={action}>
        <input type="text" placeholder="Enter name" name="name" />
        <br />
        <br />
        <input type="text" placeholder="Enter password" name="password" />
        <br />
        <br />
        <button disabled={pending}>Submit</button>
        {data.error ?? <span style={{color:"red"}}>{data.error}</span>}
        {data.message ?? <span style={{color:"green"}}>{data.message}</span>}
      </form>
    </>
  );
};
export default UseActionState;
