const Child = ({displayFunction,name})=>{
    return <>
<button onClick={()=> displayFunction(name)}>Display Name</button>
    </>
}
export default Child;