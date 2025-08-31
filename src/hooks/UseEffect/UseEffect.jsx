import { useEffect, useState } from "react";

const UseEffect = ()=>{
const [counter,setCounter] = useState(0)
const [data,setData] = useState(0)
function callOnce (){
    console.log("callOnce function called");       
}
useEffect(()=>{
callOnce() // calling this function in a useEffect, will make it sure to call just one time as [ ] is used in useEffect.
},[]) // if we want to call "callOnce()" function on just counter update, we will pass counter in [ ] just like: [counter]

// callOnce()   on any state updation, our component is rerendering because of which, this function is being called at every single state update, which is unnecessary  (just imagine the clicks of a complex and large programs.) To avoid this side effect, we are using useEffect()
return <>
     <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
     <button onClick={()=>setData(data+1)}>Data{data}</button>
    </>
}
export default UseEffect;