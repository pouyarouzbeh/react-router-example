import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h2>404 – Not Found</h2>
      <Link to="/">Go Home</Link>
    </section>
  );
}
