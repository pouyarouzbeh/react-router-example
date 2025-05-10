import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import UserDetail from './pages/UserDetail.jsx';
import NotFound from './pages/NotFound.jsx';
import './App.css';

export default function App() {

  return (
    <>
      <header className="navbar">
        <nav>
          <Link to="/" className="logo">UserDash</Link>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="users/:id" element={<UserDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">© 2025 – Mini Project</footer>
    </>
  );
}
