import React from 'react';

const UsersList = ({users}) => {
    return (
        
            <ul>
            {
              users.map(user=>(

            <li key={user.id}>
                <p><b>Email:</b>{user.email} </p>
                <p><b>Password:</b>{user.password}</p>
                <p><b>First Name</b>{user.first_name}</p>
                <p><b>Last Name</b>{user.last_name}</p>
                <p><b>Birthday</b>{user.birthday}</p>
            </li>


              ))
            }
            </ul>
        
    );
};

export default UsersList;
