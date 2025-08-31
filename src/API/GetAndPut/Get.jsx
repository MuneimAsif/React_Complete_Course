import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Get = () => {
  // const [usersData, setUsersData] = useState([]);
  // useEffect(() => {
  //   getUsersData();
  // }, []);
  // const getUsersData = async () => {
  //   let url = "https://dummyjson.com/users";
  //   let response = await fetch(url);
  //   response = await response.json();
  //   setUsersData(response.users)
  // };
  // console.log(usersData);

  // Getting our own Api data which is created using Json Server
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const url = "http://localhost:3000/users";
  useEffect(() => {
    setLoading(true);
    getUsersData();
  }, []);
  const getUsersData = async () => {
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setLoading(false);
    setUsersData(response);
  };
  const deleteUser = async (id) => {
    let response = await fetch(`${url}/${id}`, {
      method: "delete",
    });
    response = await response.json();
    console.log(response);
    if (response) {
      alert("Are you sure you want to delete a data ?");
    }
    getUsersData(); // it has been called here because it again loads the data whenever any data will be delete and the row will automatically deleted when a delete button will be clicked without reloading a page.
  };
  const editUser = (id) => {
    navigate(`/edit/${id}`)
  };
  return (
    <>
      <div>
        <ul className="userList userListHeader">
          <li>Name</li>
          <li>Age</li>
          <li>Email</li>
          <li>Action</li>
        </ul>
        {!loading ? (
          usersData &&
          usersData.map((x, i) => (
            <u key={i} l className="userList">
              <li>{x.name}</li>
              <li>{x.age}</li>
              <li>{x.email}</li>
              <li>
                <button onClick={() => deleteUser(x.id)}>Delete</button>
                <button onClick={() => editUser(x.id)}>Edit</button>
              </li>
            </u>
          ))
        ) : (
          <h3>Wait, Data is loading ...</h3>
        )}{" "}
      </div>
    </>
  );
};
export default Get;
