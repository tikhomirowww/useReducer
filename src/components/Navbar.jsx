import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <NavLink className='link' to={"/"}>Products</NavLink>
          <NavLink className='link' to={"/add"}>Add Products</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
