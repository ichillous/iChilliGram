import React from "react";
import {Route, Switch, Link} from "react-router-dom"
import Search from "../screens/Search";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-white navbar-dark ">
        <Switch>
          <Route path="/post/">
            <Link to="/post/">
            <h3 className="iglogo">
          Instagram
        </h3>
        </Link>
          </Route>
           
        </Switch>
       
          
       
        <ul className="navbar-nav">
          <li className="nav-item">
            <Search />
          </li>
          <li className="nav-item">
           
              <i class="fa fa-home"></i>
            
          </li>
          <li className="nav-item">
            
          <i class="fa fa-location-arrow"></i>
           
          </li>
          <li className="nav-item">
            
          <i class="fa fa-compass"></i>
            
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
