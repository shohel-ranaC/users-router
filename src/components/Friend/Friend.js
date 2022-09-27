import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Friend = (props) => {
   // console.log(props.friend);
   const {name, email, id } = props.friend;

//    const save = useNavigate();
//    const handleClick = (friendId) => {
//     const url = `/friend/${friendId}`;
//     save.push(url);
// }

   const friendStyle = {
    border: '1px solid orange',
    margin: '20px',
    padding: '20px',
    borderRadius: '20px'
   }
    return (
        <div style={friendStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <Link to={`/friend/${id}`}>Show Details {id}</Link>

            {/* <button onClick={() => handleClick(id)}>click me</button> */}
        </div>
    );
};

export default Friend;