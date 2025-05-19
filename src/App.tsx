import React from "react";
import AddUserForm from "./components/addUserForm";
import DarkModeToggle from "./components/darkModeToggle";
import UserList from "./components/userList";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>User Management Dashboard</h1>
      <DarkModeToggle />
      <AddUserForm />
      <UserList />
    </div>
  );
};

export default App;
