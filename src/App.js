
import axios from "axios";
import { useEffect, useState } from "react";
import UsersForm from "./component/UsersForm";
import UsersList from "./component/UsersList"


function App() {
  
    const [userSelecte, setuserSelected]= useState([]);
  
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


  return (


    <div className="App">

      <UsersList  users={users} userSelected={userSelected} />
      <div className="App container mt-5">
      <UsersForm
        getUser={getUser}
        userSelected={userSelected}
        deselectUser={deselectUser}
      />
      
    </div>

    </div>
  );
}

export default App;

