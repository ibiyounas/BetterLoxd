import React, {useState} from "react";
import { NavLink } from "react-router-dom";
const Header = () => {


  return (
    <header>
      <h1>
        <span className="logo">{""}</span>
        BetterLoxd
      </h1>
      <nav>
        <NavLink to="/movies">
            Movies
        </NavLink>
        <NavLink to="/movies/new">
            New Movie
        </NavLink>
      </nav>

    </header>
  );
}

export default Header;