import React from 'react'

function Userone(props){
    return(
        <div>
            <h1>Pass function as props</h1>
            <button onClick={props.propdata}>Pass function as props</button>
        </div>
    );
}

export default Userone;