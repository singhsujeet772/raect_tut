import { useState } from "react";

function Firstcomponent() {
    const [data,setData] = useState(0);
    function incrementData()
    {
        setData(data+1)
    }
    function decrementData()
    {
        setData(data-1)
    }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={incrementData}>Increment Data</button>
            <button onClick={decrementData}>Decrement Data</button>
        </div>
    );
}

export default Firstcomponent;
