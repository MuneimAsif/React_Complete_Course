import { useEffect } from "react";

// Handling prompt side effects in this component
const Counter = ({count,data}) => {
  const handleCounter = () => {
    console.log("handleCounter called");
  };
//   handleCounter(); The function is being called every time when a prompt "count" is updating, which is side effect. To avoid this we are using useEffect()  
useEffect(()=>{
    handleCounter()  
},[] )// empty array means; Call a useEffect just one time when a page is loaded.
useEffect(()=>{
  return console.log("Hellow World");
})
  
// =============== x ================== x =======================
const handleData = ()=>{
    console.log("handleData called");
}   // to call this function just on the updation of "data" we use:
useEffect(()=>{
handleData()
},[data]) // the "data" in an array shows that whenever "data" will be updated, handleData will be called.
  return <>
  <h1>Counter value showing in a component = {count}</h1>
  <h1>Data value showing in a component = {data}</h1>
  </>;
};
export default Counter;
