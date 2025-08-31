// import UserForReuseComp from "./UserForReuseComp";

// const Array = () => {
//   const data = [
//     {
//       name: "Alex",
//       age: 12,
//       email: "alex@gmail.com",
//       id: 1,
//     },
//     {
//       name: "Jane",
//       age: 15,
//       email: "jane@gmail.com",
//       id: 2,
//     },
//     {
//       name: "Paul",
//       age: 17,
//       email: "paul@gmail.com",
//       id: 3,
//     },
//   ];
//   return (
//     <>
//       {/* Array */}
//       <table border={2}>
//         <thead>
//           <tr>
//             <td>Id</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Age</td>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((x, i) => (
//             <tr key={i}>
//               <td>{x.id}</td>
//               <td>{x.name}</td>
//               <td>{x.email}</td>
//               <td>{x.age}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Reuse A React Component */}
//        <div>
//         {data.map((x,i)=>
//             <UserForReuseComp userData={x} />
//         )}
//         </div> 
//     </>
//   );
// };
// export default Array;
