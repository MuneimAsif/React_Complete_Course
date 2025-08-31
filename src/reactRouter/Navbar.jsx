import { Link } from "react-router-dom";  // using NavLink will highlight the current page's link
import "./header.css"
const Navbar = ()=>{
    return <>
    <div className="header">
    <div>
        <Link className="link" to={"/"}><h2>Navbar</h2></Link>  
    </div>
    <div>
        <ul>    
            <li><Link to={"/home"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/college"}>College</Link></li>
            <li><Link to={"/users"}>Users</Link></li>
            <li><Link to={"/users/list"}>List</Link></li>
        </ul>
    </div>
    </div>
    </>
}
export default Navbar;