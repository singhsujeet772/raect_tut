import { useState } from "react";

function Hideshow(){
    const [status,setStatus] = useState(true);
    return(
        <div class="hideshow">
            {
                status ? <h2>Hello World!</h2> : null
            }
            {/* <button onClick={()=>setStatus(false)}>Hide</button>
            <button onClick={()=>setStatus(true)}>Show</button> */}
            <button onClick={()=>setStatus(!status)}>Toggle</button>
        </div>
    )
}

export default Hideshow;