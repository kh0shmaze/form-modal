import { useState } from "react";

import AddUser from "./component/Users/AddUser";
import UsersList from "./component/Users/UsersList";

function App() {
  const [usersList, setusersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setusersList((pervUsersList) => {
      return [
        ...pervUsersList,
        { name: uName, age: uAge, id: Math.random().toString },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUSer={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
