import React from "react";

class Appclass extends React.Component{
    constructor(){
        super();
        console.log(`constructor`);
    }
    render(){
        console.log(`return`);
        return(
            <h1>This is class component</h1>
        )
    }
}

export default Appclass;