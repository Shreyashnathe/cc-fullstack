import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo"><Link to="/">ShopEasy</Link></div>
        <ul className="navbar-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Products</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
