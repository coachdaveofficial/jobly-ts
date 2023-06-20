import React from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";


export default function NavBarFunc() {
    return (
        <div style={{backgroundColor: "lightblue"}}>
            <Navbar expand="md">
                <NavLink to="/" className="navbar-brand">
                    Jobly
                </NavLink>

                <Nav className="ml-auto" navbar>
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
                        <NavLink to="/login" className="nav-link">
                            Login
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}