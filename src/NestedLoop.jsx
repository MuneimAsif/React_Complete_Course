import College from "./College";

const NestedLoop = ()=>{
    const collegeData = [
        {
            name: "Fast",
            city:"khi",
            website:"fast.com",
            student:[
                {
                    name:"Allen",
                    age:21,
                    email:"allen@gmail.com"
                },
                {
                    name:"alex",
                    age:19,
                    email:"alex@gmail.com"
                },
                {
                    name:"tom",
                    age:22,
                    email:"tom@gmail.com"
                },
            ]
        },
        {
            name: "UIT",
            city:"khi",
            website:"uit.com",
            student:[
                {
                    name:"Henna",
                    age:21,
                    email:"henna@gmail.com"
                },
                {
                    name:"Jon",
                    age:20,
                    email:"jon@gmail.com"
                },
                {
                    name:"Ken",
                    age:23,
                    email:"ken@gmail.com"
                },
            ]
        },
        {
            name: "Habib",
            city:"khi",
            website:"habib.com",
            student:[
                {
                    name:"Kelly",
                    age:24,
                    email:"kelly@gmail.com"
                },
                {
                    name:"Jane",
                    age:20,
                    email:"jane@gmail.com"
                },
                {
                    name:"Bruce",
                    age:23,
                    email:"bruce@gmail.com"
                },
            ]
        },
    ]
    return <>
     {
        collegeData.map((college,i)=>{
            return <div key={i}>
             <College college={college} />
            </div>
        })
     }
    </>
}
export default NestedLoop;