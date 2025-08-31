import { NavLink } from "react-router-dom";

const College = ()=>{
    return <>
    <div className="college" style={{textAlign:"center"}}>
    <h1>College</h1>
    <NavLink className={"link"} to={"/students"}>Students</NavLink>
    <NavLink className={"link"} to={"/departments"}>Departments</NavLink>
    <NavLink className={"link"} to={"/faculty"}>Faculty</NavLink>
    </div>
    </>
}
export default College;