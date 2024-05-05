import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { doSignOut } from "../../firebase/auth";
import "./indexjs.css";
const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  return (
    <>
   
      {userLoggedIn ? (
        <>
          <div className="log">
            <button
              onClick={() => {
                doSignOut().then(() => {
                  navigate("/login");
                });
              }}
              className="text-sm text-blue-600 underline"
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="hi">
            <Link className="text-sm text-blue-600 underline" to={"/login"}>
              Login
            </Link>
            <Link className="text-sm text-blue-600 underline" to={"/register"}>
              Register New Account
            </Link>
            <div></div>
          </div>
        </>
      )}
   </>
  );
};

export default Header;
