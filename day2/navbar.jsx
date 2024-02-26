import { useState } from "react";
import "../../assets/css/navbar.css";
import { Link } from "react-router-dom";
import icc from "../../assets/images/logo-color.png";

export default function Navbar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className="bode">
        <div className="nave">
          <img
            src={icc}
            style={{ width: '60px', height: '60px', borderRadius: '50%', bottom: '40px' }}
            onClick={toggleSidebar}
          />
          <div className="topnav">
            <Link to="/user/home" className="nav-link">
              <i className="fas fa-home"></i> Home
            </Link>
            <Link to="/user/plans" className="nav-link">
              <i className="fas fa-list-alt"></i> Plans
            </Link>
            <Link to="/user/addon" className="nav-link">
              <i className="fas fa-gift"></i> Add On
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarVisible ? "visible" : ""}`}>
        {/* Sidebar content */}
        <div>Profile</div>
        <div>Settings</div>
        <div>Logout</div>
      </div>
    </>
  );
}
