import { useId } from "react";

const UseId = ()=>{
    const id1 = useId() // it provides unique ids
    const id2 = useId()
    return <>
    <h2>{id1}</h2>
    <h2>{id2}</h2>
    </> 
}
export default UseId;