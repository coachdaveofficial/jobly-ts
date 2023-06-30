import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBarFunc from "./NavBar";
import UserContext from "../context/UserContext";

it("matches the snapshot", () => {
    const {asFragment} = render(
        <MemoryRouter>
            <NavBarFunc logout={() => {}} />
        </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
});

it("renders without crashing", () => {
    const {getByText} = render(
        <MemoryRouter>
            <NavBarFunc logout={() => {}} />
        </MemoryRouter>
    );

    expect(getByText("Jobly")).toBeInTheDocument();
    expect(getByText("Login")).toBeInTheDocument();
    expect(getByText("Signup")).toBeInTheDocument();
});

it("renders navbar with logged in links when user is logged in", () => {
    const currentUser = {username: "testuser", firstName: "", lastName: "", password: "", email: "", isAdmin: false}
    const setCurrentUser = () => {}
    const { getByText } = render(
      <UserContext.Provider value={{currentUser, setCurrentUser} }>
        <MemoryRouter>
        <NavBarFunc logout={() => {}} />
        </MemoryRouter>
        
      </UserContext.Provider>
    );
  
    expect(getByText("Companies")).toBeInTheDocument();
    expect(getByText("Jobs")).toBeInTheDocument();
    expect(getByText("Profile")).toBeInTheDocument();
    expect(getByText("Logout testuser")).toBeInTheDocument();
    expect(getByText("Jobly")).toBeInTheDocument();
  });