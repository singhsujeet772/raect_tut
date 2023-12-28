import { useState } from "react";

function Formdata(){
    const [name,setName] = useState("");
    const [country,setCountry] = useState("");
    const [tnc,setTnc] = useState(false);
    function getFormData(e){
        e.preventDefault();
        console.log(name,country,tnc);
    }
    return(
        <div class="form">
            <form onSubmit={getFormData}>
                <input type="text" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)}/>
                <br></br>
                <br></br>
                <select onChange={(e)=>setCountry(e.target.value)}>
                    <option selected disabled>Select Your Country</option>
                    <option>India</option>
                    <option>Bangladesh</option>
                </select>
                <br></br>
                <br></br>
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span>Terms & Conditions</span>
                <br></br>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Formdata;