import { useState } from "react";

const Post = ()=>{
    const [name,setName] = useState(" ")
    const [age,setAge] = useState(" ")
    const [email,setEmail]   = useState(" ")
    const createUser = async ()=>{
     console.log(name,age,email);
     const url = "http://localhost:3000/users"
     let response = await fetch(url,{
        method:"Post",
        body:JSON.stringify({name,age,email})
     })
     response = await response.json()
    if (response) {
        console.log("User Added Successfully",response);
    }}
    return <>
    <div>
        <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} /><br /><br />
        <input type="text" placeholder="Enter age" onChange={(e)=>setAge(e.target.value)} /><br /><br />
        <input type="text" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/><br /><br />
        <button onClick={createUser}>Add User</button>
    </div>
    </>
}
export default Post;