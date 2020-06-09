import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
     
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark ">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav justify-content-center">
                            {/* => /users/29 */}
                            <li className="nav-item ">
                                <NavLink exact activeClassName="text-white" className="nav-link" to="/">Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="text-white" className="nav-link" to="/profile">profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="text-white" className="nav-link" to="/adduser">AddUser</NavLink>
                            </li>

                        </ul>

                    </div>

                </nav>
  
    )
}

export default Header;