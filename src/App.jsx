import AdvanceValidate from "./AdvanceValidation/AdvanceValidate";
import Post from "./API/POST/Post";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Counter from "./hooks/UseEffect/Counter";
// import { useState } from "react";
// import ExternalStyling from "./styling/externalCss/externalStyling";
// import StyledComponent from "./styling/styledComponents/StyledComponent";
// import UseRef from "./hooks/useRef/UseRef";
// import UncontrolledComponent from "./hooks/useRef/UncontrolledComponent";
// import Parent from "./passingFunctionInCompAsProp/Parent";
// import UseFormStatus from "./hooks/userFormStatus/UseFormStatus";
// import UseTransition from "./hooks/useTransition/UseTransition";
// import DerivedState from "./derivedState/DerivedState";
// import ParentUser from "./liftingStateUp/ParentUser";
// import Object from "./updatingObjects/Object";
// import Array from "./updatingArrays/Array";
// import Router from "./reactRouter/Router";
// import Validate from "./Validation/Validate";
// import UseActionState from "./hooks/useActionState/UseActionState";
// import UseId from "./hooks/useId/useId";
// import ContextApi from "./contextApi/ContextApi";
// import UseEffect from "./hooks/UseEffect/UseEffect";
// import NestedLoop from "./NestedLoop";
// import Clock from "./Clock";
// import Array from "./Array";
// import RadioSelect from "./radioSelect";
// import * as React from "react";
// import Login from "./UserComponent";
// import Checkbox from "./Checkboxjsx";
// import User from "./User";

function App() {
  // State & hooks
  // const userName = "Abu Ubaida"
  // const userAge = 28
  // const userMission = "Save Palestine"
  // const user = {
  //   name: "Abu Ubaida",
  //   age: 28,
  //   mission: "Save Palestine",
  // };

  // const [count, setCount] = useState(0)
  // const [data,setData] = useState(0)
  // const [user,setUser] = useState("Abid")
  // const [val, setVal] = "Ali";
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [color, setColor] = useState("red");

  return (
    <>
      {/* <Login /> */}

      {/* State & hooks */}
      {/* <h1>{count}</h1>    
      <button onClick={()=>{setCount(count+1)}}>Update Count</button> */}
      {/* <h1>{count}</h1>
      {count == 0 ? (
        <h1>Condition 0</h1>
      ) : count == 1 ? (
        <h1>Condition 1</h1>
      ) : (
        <h1>Other condition</h1>
      )}
      <button onClick={() => setCount(count + 1)}>Increase count</button> */}

      {/* Props */}
      {/*static*/}
      {/* <User  name = "Abu Ubaida" age = {28} mission = "Save Palestine" />    */}

      {/*dynamic*/}
      {/* <User  name ={userName} age = {userAge} mission = {userMission} />  */}

      {/*passing an object*/}
      {/* <User obj = {user} /> */}

      {/* Get Input Field Value */}
      {/* <input type="text" placeholder="Enter value" onChange={(e)=>setVal(e.target.value)} /> */}

      {/* Controlled Components */}
      {/* <form action="">
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name" />
        <br />
        <input  value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Enter Passowrd" />
        <br />
        <input value={email}  onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Email" />
        <br />
        <button>Submit</button>
        {name}
        {password}
        {email}
      </form> */}
      {/* <Checkbox /> */}
      {/* <RadioSelect /> */}
      {/* <Array /> */}
      {/* <select onChange={(e) => setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
      </select>
      <Clock color={color} /> */}
      {/* <NestedLoop /> */}
      {/* <UseEffect /> */}
      {/* <Counter count = {count} data = {data}/>
      <button onClick={()=> setCount(count + 1)}>Counter {count}</button>
      <button onClick={()=> setData(data + 1)}>Data {data}</button> */}

      {/* <ExternalStyling /> */}
      {/* <StyledComponent /> */}
      {/* <UseRef /> */}
      {/* <UncontrolledComponent /> */}
      {/* <Parent /> */}
      {/* <UseFormStatus /> */}
      {/* <UseTransition /> */}
      {/* <DerivedState /> */}
      {/* <ParentUser /> */}
      {/* <Object /> */}
      {/* <Array /> */}
      {/* <UseActionState /> */}
      {/* <UseId /> */}
      {/* <ContextApi /> */}
      {/* <Router /> */}
      {/* <Get />
      <Post /> */}
      {/* <Validate /> */}
      <AdvanceValidate />
    </>
    
  );
}

export default App;
