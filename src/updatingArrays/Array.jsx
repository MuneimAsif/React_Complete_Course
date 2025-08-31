import { useState } from "react";

const Array = () => {
  // const [data,setData] = useState(["jack","rock","sam"])
  // const handleData = (val)=>{
  //     data[data.length -1] = val
  //   setData([...data])
  // }

  const [details, setDetails] = useState([
    {
      name: "Jack",
      age: 12,
    },
    {
      name: "Sam",
      age: 21,
    },
    {
      name: "Peter",
      age: 15,
    },
  ]);
  const handleDetails = (val) => {
    details[details.length - 1].age = val;
    setDetails([...details]);
  };
  return (
    <>
      {/* <input type="text" placeholder="Enter Last Name" onChange={(e)=> handleData(e.target.value)} /> */}
      {/* {data.map((x,i)=>{
        return <h3 key={i}>{x}</h3>
    })} */}

      <input
        type="text"
        placeholder="Enter age"
        onChange={(e) => {
          handleDetails(e.target.value);
        }}
      />
      {details.map((x, i) => {
        return <h3 key={i}>{x.age}</h3>;
      })}
    </>
  );
};
export default Array;
