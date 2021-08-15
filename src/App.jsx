import React, { useState } from 'react';

import AddUser from './Components/Users/AddUser';

import UserList from './Components/Users/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (user) => {
    setUserList((prevState) => {
      return [...prevState, user];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList}></UserList>
    </div>
  );
}

export default App;
