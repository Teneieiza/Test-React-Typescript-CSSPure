import { useEffect, useState } from "react";
import "../styles/userList.css";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  const [user, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: User[]) => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  //   console.log(user);

  return (
    <div className="user-container">
      <h2>User List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        user.map((user) => (
          <div key={user.id} className="user-item">
            <span className="user-name">{user.name}</span>
            <span className="user-email">{user.email}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
