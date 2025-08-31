import { useActionState } from "react";

const AdvanceValidate = () => {
    const handleLogin = ()=>{
        console.log('Called');
    }
    const [data,action,pending] = useActionState(handleLogin)
  return (
    <>
      <h1>Validation with useActionState in React</h1>
      <form action="">
        <input type="text" placeholder="Enter user name" />
        <br />
        <br />
        <input type="text" placeholder="Enter password" />
        <br />
        <br />
        <button>Login</button>
      </form>
    </>
  );
};
export default AdvanceValidate;
