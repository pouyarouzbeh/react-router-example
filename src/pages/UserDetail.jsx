import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserDetail.css';


// const params = useParams();
//const params_id = params.id;
// برای /users/42  →  params === { id: "42" }

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser]     = useState(null);
  const [loading, setLoad]  = useState(true);
  const [error, setError]   = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setUser(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoad(false));
  }, [id]);

  if (loading) return <p className="status">Loading…</p>;
  if (error)   return <p className="status error">Error: {error}</p>;
  if (!user)   return null;

  return (
    <div className="detail-card">
      <button className="back-btn" onClick={() => navigate('/')}>← Back</button>
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>City:</strong> {user.address.city}</p>
    </div>
  );
}
