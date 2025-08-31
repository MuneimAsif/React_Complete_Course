import { useRef } from "react";

// It is used to control any element; to manipulate the dom
const UseRef = ()=>{
    const inputRef = useRef(null)
    const handleInputRef = ()=>{
        // we have now complete access to all the things available in an input. We can control it
        inputRef.current.focus()
        inputRef.current.placeholder = "Enter name"
        inputRef.current.style.color = "cyan"
    }
    return <>
    <input type="text" ref={inputRef} />
    <button onClick={()=> handleInputRef()}>Focus</button>
    </>
}
export default UseRef;