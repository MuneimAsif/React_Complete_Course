import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams(); // we use "id" because in a "edit" route, the path is /edit/:id if it was userId, we should also use userId
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate()
  const url = `http://localhost:3000/users/${id}`;
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    setName(response.name);
    setEmail(response.email);
    setAge(response.age);
  };
  const updateUserData = async () => {
    let response = await fetch(url,{
      method:"Put",
      body:JSON.stringify({name,email,age})
    })
    response = await response.json()
    if(response){
      alert("Want to update information ?")
      navigate("/get")
    }
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Edit User</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Update name"
        />
        <br />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Update email"
        />
        <br />
        <br />
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Update age"
        />
        <br />
        <br />
        <button onClick={updateUserData}>Update User</button>
      </div>
    </>
  );
};
export default Edit;
