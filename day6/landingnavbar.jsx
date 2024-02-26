import "../../assets/css/landingnav.css";
import { Link } from "react-router-dom";
import uno from "../../assets/images/logo-color.png"
export default function LandingNavbar() {
  return (
    <>
      <div className="bode">
        <div className="nav">
          <img
            src=
        
            {uno}
            style={{ width: '60px', height: '60px', borderRadius: '50%', bottom: '40px' }}
            alt="Logo"
          />
          <div className="topnav">
            <Link to="/routeTo/login" className="nav-link">
              <i className="fas fa-sign-in-alt"></i> LOGIN
            </Link>
            <Link to="/routeTo/signup" className="nav-link">
              <i className="fas fa-user-plus"></i> SIGNUP
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
