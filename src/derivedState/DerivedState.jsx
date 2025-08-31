import { useState } from "react";

const DerivedState = ()=>{
    const [users,setUsers] = useState([])
    const [user,setUser] = useState(' ')
    const handleAddUser = ()=>{
        setUsers([...users,user])
    }
    const total = users.length
    const last = users[users.length - 1]
    const unique = [...new Set(users)].length
    return <>
    <h2>Total Users : {total}</h2>
    <h2>Last User : {last}</h2>
    <h2>Unique Total User : {unique}</h2>
    <input type="text" onChange={(e)=> setUser(e.target.value)} placeholder="Add new user" />
    <button onClick={handleAddUser}>Add User</button>
    {
        users.map((x,i)=>{
            return <h4 key={i}>{x}</h4>
        })
    }
    </>
}
export default DerivedState;