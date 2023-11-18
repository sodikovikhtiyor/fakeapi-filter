import React from "react";

import { NavLink, useNavigate } from "react-router-dom";
import All from "./All";
function Home() {
  
  return (
    <div className="div">
      <div className="container-bl">
        <header>
          <div className="logo">
            <h2>Fake Store</h2>
          </div>
          <nav>
            <NavLink className="link" to="/card">
              Card
            </NavLink>
            <NavLink className="link" to="/login">
              Log in
            </NavLink>
            <NavLink className="link" to="/register">
              Register
            </NavLink>
          </nav>
        </header>
      </div>

    </div>
  );
}

export default Home;
