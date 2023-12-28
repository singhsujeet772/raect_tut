import { useState } from "react";

function Profile(){
    const [loggedin,setLoggedin] = useState();
    return(
        <div>
        {
            loggedin==1 ? <h1>Welcome User 1</h1> 
            :loggedin==2 ? <h1>Welcome User 2</h1> 
            : <h1>Welcome Guest</h1>
        }
        </div>
    );
}

export default Profile;