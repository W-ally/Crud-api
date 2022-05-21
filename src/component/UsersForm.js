import axios from "axios";
import React, { useEffect, useState } from "react";

const UsersForm = ({ getUser, userSelected, deselectUser }) => {

  const [id, setid] = useState("");
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthDay] = useState("");
 

  useEffect(() => {
    if (userSelected !== null) {
      setid(userSelected.id);
      setEmail(userSelected.email);
      setPassw(userSelected.password);
      setFirstName(userSelected.first_name);
      setLastName(userSelected.last_name);
      setBirthDay(userSelected.birthday)
    } else {
      setid("");
      setEmail("");
      setPassw("");
      setFirstName("");
      setLastName("");
      setBirthDay("");
    }
  }, [userSelected]);

  const submit = (e) => {
    e.preventDefault();
    const user = {
      id,
      email,
      password: passw,
      first_name: firstName,
      last_name:lastName,
      birthday
    };
    if (userSelected !== null) {
      // Si hay algo en movieSelected, hay que editar
      alert("Editando");
      axios
        .put(
          `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,user
          
        
        )
        .then(() => {
          getUser();
          deselectUser();
        });
    } else {
      axios
        .post("https://users-crud1.herokuapp.com/users/", user)
        .then(() => getUser())
        .catch((error) => console.log(error.response));
    }
  };

  return (
    <form onSubmit={submit} className="mb-5">
      <div className="d-flex">

        <div class="mb-3 w-50 pe-2">
          <label htmlFor="id" class="form-label">
            Id
          </label>
          <input
            type="text"
            className="form-control"
            id="id"
            onChange={(e) => setid(e.target.value)}
            value={id}
          />
        </div>
        <div class="mb-3 w-50">
          <label htmlFor="email" class="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
      </div>

      <div class="mb-3">
        <label htmlFor="firstname" class="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstname"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </div>


  
      

      <div class="mb-3">
        <label htmlFor="lastname" class="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastname"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </div>

      <div class="mb-3">
        <label htmlFor="birthday" class="form-label">
          Birthday
        </label>
        <input
          type="date"
          className="form-control"
          id="birthday"
          onChange={(e) => setBirthDay(e.target.value)}
          value={birthday}
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default UsersForm;

