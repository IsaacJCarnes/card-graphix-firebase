import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

import { logout } from "../../firebase";

const Header = ({ userData, setUserData }) => {
  const navigate = useNavigate();

  return (
    <div className="Header">
      <div id="top">
        <Link className="logo" to="/">
          <h1>Card Graphix</h1>
        </Link>
      </div>
      {userData.loggedIn ? (
        <div className="container-2">
          <button className="logout section" onClick={(e) => {e.preventDefault(); logout(); setUserData({loggedIn: false}); navigate("");}}>
            Logout
          </button>
        </div>
      ) : (
        <div className="container-2">
          <Link className="login section" to="/login">
            Login
          </Link>
          <Link className="signup section" to="/signup">
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};

/*
{false ? (
          <div className='container-2'>
          <button className="logout section" onClick={logout}>
            Logout
          </button>
          </div>
        ) : (
          <div className='container-2'>
            <Link className="login section" to="/login">
              Login
            </Link>
            <Link className="signup section" to="/signup">
              Signup
            </Link>
          </div>
        )}
        */

export default Header;

/*
<div className="Header">
      <motion.div className="top"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
      >
      <Link className="logo" to="/">
        <h1>Card Graphix</h1>
      </Link>
      </motion.div>
        {Auth.loggedIn() ? (
          <div className="container-2">
          <button className="logout section" onClick={logout}>
            Logout
          </button>
          </div>
        ) : (
          <><motion.div className="container-2"
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.5 }}
          >
            <Link className="login section" to="/login">
              Login
            </Link>
            <Link className="signup section" to="/signup">
              Signup
            </Link>
            </motion.div>
            
          </>
        )}
    </div>
*/
