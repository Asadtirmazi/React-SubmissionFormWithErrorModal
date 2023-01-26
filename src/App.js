import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import Progress from './components/Progress'

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prev) => {
      console.log(uName, uAge)
      return [...prev, { name: uName, age: uAge , id : Math.random().toString()}];
    });
  };

  return (
    <div>
      <Progress></Progress>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
