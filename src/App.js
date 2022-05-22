
import axios from "axios";
import { useEffect, useState } from "react";
import UsersForm from "./component/UsersForm";
import UsersList from "./component/UsersList"
import './App.css';


function App() {
  
    const [userSelecte, setuserSelected]= useState(null);
  
    const [users, userSet ]=useState([]);
  
  useEffect(()=>{
    
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then((res) => userSet(res.data));
    
    
  },[])
  
  const getUser=()=>{
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then((res) => userSet(res.data));
    
  }
  
  const userSelected = (user) => setuserSelected(user);

  const deselectUser = () => setuserSelected(null);
  

  const deleteUser = (id) =>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(()=>getUser());

  }

  return (


    <div>

       
      <div className=" container mt-5">
      <h3>Users</h3>
      <UsersForm
        getUser={getUser}
        userSelected={userSelecte}
        deselectUser={deselectUser}
      />

<UsersList  users={users} userSelected={userSelected} deleteUser={deleteUser}/>
      
    </div>

    </div>
  );
}

export default App;

