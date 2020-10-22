import React from "react";
import Search from "../screens/Search";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        
          Instagram
       
        <ul className="navbar-nav">
          <li className="nav-item">
            <Search />
          </li>
          <li className="nav-item">
           
              Icon
            
          </li>
          <li className="nav-item">
            
              Icon
           
          </li>
          <li className="nav-item">
            
              Icon
            
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
