import { Link, useParams } from "react-router-dom";

const UserDetails = ()=>{
    const params = useParams();

    return <>
    <h2>User is :{params.id} </h2>
    <button><Link to={"/users/"} >Back</Link></button>
    </>
}
export default UserDetails;