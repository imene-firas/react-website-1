import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-log">
            TRVL <i className="fab fa-typo3" />
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
