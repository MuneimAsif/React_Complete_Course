import Child from "./Child";

const Parent = ()=>{
    const displayFunction  = (name)=>{
        console.log(name);
    }
    return <>
    <Child displayFunction= {displayFunction} name = "Adil" />
    </>
}
export default Parent;