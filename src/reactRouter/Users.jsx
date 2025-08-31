import { Link } from "react-router-dom";

const Users = ()=>{
    const userData = [
        {id:1,name:"Sam"},
        {id:2,name:"Bruce"},
        {id:3,name:"Tim"},
        {id:4,name:"Jack"},
        {id:5,name:"John"},
    ]
    return <>
    <h2>Users </h2>  
    {
        userData.map((x,i)=>{
            return (
                <h3><Link to={"/users/"+x.id} >{x.name}</Link></h3>
            )
        })
    }
    </>
}
export default Users;