// Context Api is used to send and get data from one component to another without props
//Passing your data thorugh an each component will slow your program and performance especially for larger data. Insteadn use context api so your data can transfer directly from "ContextApi" component to "Subject" component without involving props
// import { useState } from "react";
// import College from "./College";
// import { SubjectContext } from "./ContextData";

// const ContextApi = () => {
//   const [subject, setSubject] = useState(" ");
//   return (
//     <>
//       <div style={{ backgroundColor: "yellow", padding: 10 }}>
//         <SubjectContext.Provider value={subject}>
//         <select defaultValue={subject} onChange={(e)=>setSubject(e.target.value)}>
//             <option value="">Select Subject</option>
//             <option value="English">English</option>
//             <option value="Urdu">Urdu</option>
//             <option value="Maths">Maths</option>
//         </select>
//           <h1>Context Api</h1>
//           <College />
//         </SubjectContext.Provider>
//       </div>
//     </>
//   );
// };
// export default ContextApi;
