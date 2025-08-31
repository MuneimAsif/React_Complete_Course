const Student = ({student})=>{
    return <>
      <ul>
                <li>Name: {student.name}</li>
                <li>Age: {student.age}</li>
            </ul>
    </>
}
export default Student;