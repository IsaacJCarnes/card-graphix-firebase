import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
  getUserData,
} from "../../firebase";

import './signup.css';

const Signup = ({setUserData}) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) {
      fetchData(user.uid);
    }
  }, [user, loading]);

  const fetchData = (uid) => {
    getUserData(uid).then((data) => {
      if (data.loggedIn) {
        setUserData(data);
        navigate("/card");
      }
    });
  };

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    registerWithEmailAndPassword(formState.email, formState.password).then((data) => {
      if (typeof data !== "undefined" && "message" in data) {
        console.log(data.message);
      } else if (typeof data !== "undefined" && "loggedIn" in data) {
        setUserData(data);
        navigate("/card");
      }
    });
  };

  return (
    <main className="login-container">
      <div className="app-wrapper">
        <div className="card">
          <h4 className="title">Sign Up</h4>
          <div className="card-body">
           
              <form onSubmit={handleFormSubmit}>
                <input
                  className="input1"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="input2"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
