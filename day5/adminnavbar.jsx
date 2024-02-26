// Navbar.js
import '../../assets/css/admin.css';
import { Link } from 'react-router-dom';
function AdminNavbar() {
  return (
    <nav className="navbar">
    <ul className="navbar-nav">
      <li className="nav-item">
         <Link to="/adminadd" className="nav-link">Add plans</Link>
         
      </li>
    
      <li className="nav-item">
        <Link to="/adminadd" className="nav-link"> Add addon</  Link>
      </li>
     
      <li className="nav-item">
        <Link to="/his" className="nav-link">History</Link>
      </li>
    </ul>
  </nav>
  );
}

export default AdminNavbar;