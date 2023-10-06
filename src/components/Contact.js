import { useState } from "react";

function Contact() {
    const [name, setName] = useState("Dhruv");//Default value will be Dhruv

    // const handleClick=()=>{
    //     setName("Raj")
    // }
    return (
        <div>
            <h1>Contact Details</h1>
            <h2>The owner of the page is {name}</h2>
            <button class="btn btn-primary" onClick={()=>{setName("Raj")}}>Change owner</button>
        </div>
    );
}

export default Contact;