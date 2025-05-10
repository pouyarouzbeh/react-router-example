import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [users, setUsers]   = useState([]);
  const [loading, setLoad]  = useState(true);
  const [error, setError]   = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoad(false));
  }, []);

  if (loading) return <p className="status">Loading…</p>;
  if (error)   return <p className="status error">Error: {error}</p>;

  return (
    <section>
      <h2>Users</h2>
      <ul className="user-list">
        {users.map(u => (
          <li key={u.id}>
            <Link to={"/users/" + u.id}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
