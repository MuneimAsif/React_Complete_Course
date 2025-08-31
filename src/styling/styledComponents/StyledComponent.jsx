// Install styled component first by "npm i styled-components"
import styled from "styled-components";

const StyledComponent = ()=>{
    // const H1 = styled.h1`
    // color:red;
    // border: 1px solid green;
    // border-radius:5px;
    // margin:20px;
    // padding:10px
    // `
    //Anoter method

    const H1 = styled.h1({
    color:"red",
    border:" 1px solid green",
    borderRadius:"5px",
    margin:"20px",
    padding:"10px"
    })
    return <>
    <H1>Hello Heading</H1>
    <H1>Hello Heading 2</H1>
    <H1>Hello Heading 3</H1>
    </>
}
export default StyledComponent;