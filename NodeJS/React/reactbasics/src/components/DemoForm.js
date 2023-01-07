import React,{useState} from "react";

const DemoForm=()=>{
    const [name, setName] = useState('')

    const handleChange=(e)=>{
        setName(e.target.value)
    }
    return (
        <form>
            <input value={name} onChange={handleChange}/>
            <p>Your name is {name}</p>
        </form>
    )
}

export default DemoForm;