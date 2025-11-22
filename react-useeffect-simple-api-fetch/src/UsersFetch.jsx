import { useState, useEffect } from "react";

export default function UsersFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then(function (res) {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(function (data) {
        setUsers(data);
        setLoading(false);
      })
      .catch(function (err) {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading users…</p>;
  }

  if (error) {
    return <p>Error fetching users: {error}</p>;
  }

  return (
    <div>
      <h2>Fetched Users</h2>
      <ul>
        {users.map(function (user) {
          return (
            <li key={user.id}>
              <strong>{user.name}</strong> – {user.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}