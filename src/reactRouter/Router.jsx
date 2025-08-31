import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import College from "./College";
import Student from "./Students";
import Departments from "./Departments";
import Faculty from "./Faculty";
import Users from "./Users";
import UserDetails from "./UserDetails";
import List from "./List";
import Edit from "../API/GetAndPut/edit";
import Get from "../API/GetAndPut/Get";
import Post from "../API/POST/Post";

const Router = () => {
  return (
    <>
      {/* <BrowserRouter>  Inside this, add an <App /> component in a main.jsx file */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/college" element={<College />} />
        <Route path="/students" element={<Student />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/list?" element={<List />} /> {/* ? will make it optional if List page is available, it will open */}
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/get" element={<Get />} />
        <Route path="/post" element={<Post />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};
export default Router;
