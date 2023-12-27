import React from 'react';

function StudentProps(props) {
    console.log(props);

    return (
        <>
            <div style={{ backgroundColor: "skyblue", margin: "10px" }}>
                <h1>Student Data</h1>
                <p>Name: {props.name}</p>
                <p>Email: {props.email}</p>
                <p>Address: {props.other.address}</p>
                <p>Phone: {props.other.phone}</p>
            </div>
        </>
    );
}

StudentProps.defaultProps = {
    name: "Unknown",
    email: "Unknown",
    other: { address: "Unknown", phone: "Unknown" }
};

export default StudentProps;
