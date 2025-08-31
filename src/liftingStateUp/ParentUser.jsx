import { useState } from "react";
import AddUserChild from "./AddUserChild";
import DisplayUserChild from "./DisplayUserChild";

const ParentUser = ()=>{
    const [user,setUser] = useState()
    return <>
    <AddUserChild setUser={setUser} />
    <DisplayUserChild user={user} />
    </>
}
export default ParentUser;