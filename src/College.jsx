import Student from "./Student";

const College = ({college}) =>{
    return <>
    <h1>
        Name: {college.name}
    </h1>
    <ul>
        <li><h3>City: {college.city}</h3></li>
        <li><h3>Website: {college.website}</h3></li>
        <li><h3>Students:</h3>
        {college.student.map((student)=>(
            <Student student={student} />
        ))}
        </li> 
    </ul>
    </>
}
export default College;