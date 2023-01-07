import React, { useState } from "react";

const MtoKM=()=>{
    const [val, setVal] = useState('')


    const convert=(e)=>{
        setVal(e.target.value)
    }
    return (
        <form>
            <input value={val} onChange={convert}/>
            <p>Miles to Kilometer is  {val/1.6}</p>
        </form>
    )
}

export default MtoKM