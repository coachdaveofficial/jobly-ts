import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import UserContext from "../context/UserContext";
import { LogoutFunction, NavBarProps } from '../types/types';


export default function NavBarFunc({logout}:NavBarProps) {
    const {currentUser} = useContext(UserContext);
    return (

        <div style={{ backgroundColor: "lightblue" }}>
            <Navbar expand="md">
                <NavLink to="/" className="navbar-brand">
                    Jobly
                </NavLink>

                <Nav className="ml-auto" navbar>

                    {
                        currentUser ?
                            <>
                                <NavItem>
                                    <NavLink to="/companies" className="nav-link">
                                        Companies
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/jobs" className="nav-link">
                                        Jobs
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/profile" className="nav-link">
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/logout" className="nav-link" onClick={() => logout()}>
                                        Logout {currentUser.username}
                                    </NavLink>
                                </NavItem>
                            </>
                            :
                            <>
                                <NavItem>
                                    <NavLink to="/login" className="nav-link">
                                        Login
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/signup" className="nav-link">
                                        Signup
                                    </NavLink>
                                </NavItem>
                            </>
                    }




                </Nav>
            </Navbar>
        </div>
    );
}