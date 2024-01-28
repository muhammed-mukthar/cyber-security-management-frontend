import React from "react";
import { useNavigate } from "react-router-dom";
import logo2 from "../../assets/images/logo2.png";
import "./facts.css"; // Import CSS file
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  const userData = useSelector((state) => state.userId.userData);

  return (
    <div className="heading bodys">
      <nav>
        <span className="navitem">
          <img
            src={logo2}
            alt="logo here"
            className="logo"
            width="65rem"
            onClick={() => handleNavigation("/")} // Navigate to home
            style={{ cursor: "pointer" }}
          />
        </span>
        <span>
          <button onClick={() => handleNavigation("/")}>HOME</button>
        </span>
        <span>
          <button onClick={() => handleNavigation("/learn-more")}>
            LEARN MORE
          </button>
        </span>
        <span>
          <button onClick={() => handleNavigation("/threats")}>THREATS</button>
        </span>
        <span>
          <button onClick={() => handleNavigation("/solutions")}>
            SOLUTIONS
          </button>
        </span>
        <span>
          <button onClick={() => handleNavigation("/facts")}>FACTS</button>
        </span>
        <span>
          <button onClick={() => handleNavigation("/recommendations")}>
            RECOMMENDATIONS
          </button>
        </span>
        {!userData ? (
          <span>
            <button onClick={() => handleNavigation("/login")}>LOGIN</button>
          </span>
        ) : (
          <span>
            <button onClick={() => handleNavigation("/dashboard")}>
              DASHBOARD
            </button>
          </span>
        )}
      </nav>
    </div>
  );
}

export default Header;
