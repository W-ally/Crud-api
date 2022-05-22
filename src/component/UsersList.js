import React from 'react';

const UsersList = ({users,userSelected, deleteUser}) => {
    return (
        
            <ul >
            {
              users.map(user=>(

            <li key={user.id} className="list" >

                <p><b>ID:</b> {user.id} </p>
                <p><b>Email:</b> {user.email} </p>
                <p><b>Password:</b> {user.password}</p>
                <p><b>First Name:</b> {user.first_name}</p>
                <p><b>Last Name:</b> {user.last_name}</p>
                <p><b>Birthday:</b> {user.birthday}</p>

                <button className='btn btn-warning' onClick={()=>userSelected(user)}><i class="fa-solid fa-pen-to-square"></i></button>
                
                <button className='btn btn-warning'onClick={() => deleteUser(user.id)}><i class="fa-solid fa-trash-can"></i></button>

            </li>


              ))
            }
            </ul>
        
    );
};

export default UsersList;
