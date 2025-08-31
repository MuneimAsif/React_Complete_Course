// Getting values for input field from any method without including state but directly including the dom object; In this case, it will be called Un controlled component

import { useRef } from "react";
const UncontrolledComponent = () => {
  //   const handleForm = (e) => {
  //     e.preventDefault();
  //     const user = document.querySelector("#user").value;
  //     const password = document.querySelector("#password").value;
  //     console.log(user, password);
  //   };

  const userRef = useRef();
  const passwordRef = useRef();

  const handleFormThorughRef = (e) => {
    e.preventDefault();
    const user = userRef.current.value;
    const password = passwordRef.current.value;
    console.log(user, password);
  };

  return (
    <>
      {/* Through query selector */}

      {/* <form method="post" onSubmit={handleForm}>
        <input type=" text" id="user" placeholder="Enter user name" />
        <br />
        <br />
        <input type=" text" id="password" placeholder="Enter password" />
        <br />
        <br />
        <button>Submit</button>
      </form> */}

      {/* Through useRef */}

      {/* <form method="post" onSubmit={handleFormThorughRef}>
        <input type=" text" ref={userRef} placeholder="Enter user name" />
        <br />
        <br />
        <input type=" text" ref={passwordRef} placeholder="Enter password" />
        <br />
        <br />
        <button>Submit</button>
      </form> */}
    </>
  );
};
export default UncontrolledComponent;
