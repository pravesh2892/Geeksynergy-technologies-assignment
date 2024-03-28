import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.css";

const Main = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/users");
      setUsers(response.data);
      console.log("user data"+response.data)
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>GEEKSYNERGY TECHNOLOGIES PRIVATE LIMITED</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className={styles.userlist}>
        <h2 >Registered Users:</h2>
        <table className={styles.users_table}>
          <thead>
            <tr>
              <th> Name</th>
              <th>Mobile number</th>
              <th>Profession</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.phone}</td>
                <td>{user.profession}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
