import { useState } from "react";

const Object = () => {
  const [data, setData] = useState({
    name: "Jack",
    address: {
      city: "Los Angelos",
      country: "USA",
    },
  });
  const handleData = (val) => {
    data.name = val;
    setData({ ...data });
    console.log(data);
  };
  const handleNestedData = (val) => {
    data.address.city = val;
    setData({ ...data });  // confirm which is correct, Results are same
    setData({ ...data,address:{...data.address} }); // confirm which is correct, Results are same
  };
  return (
    <>
      <input
        type="text"
        placeholder="Update Name"
        onChange={(e) => handleData(e.target.value)}
      />
      <input
        type="text"
        placeholder="Update Ciy"
        onChange={(e) => handleNestedData(e.target.value)}
      />
      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>
    </>
  );
};
export default Object;
