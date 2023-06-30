import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import UserContext from "../context/UserContext";

const MockComponent = () => <div>Mock Component</div>;


it("matches snapshot", () => {
    const { asFragment } = render(
        <MemoryRouter>
            <PrivateRoute component={MockComponent} />
        </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
});


it("renders the component when user is logged in", () => {
    const currentUser = { username: "testuser", firstName: "", lastName: "", password: "", email: "", isAdmin: false }
    const setCurrentUser = () => { }

    const { getByText } = render(
        <MemoryRouter initialEntries={["/private"]}>
            <UserContext.Provider value={{ currentUser, setCurrentUser }}>
                <Routes>
                    <Route path="/private" element={<PrivateRoute component={MockComponent} />} />
                </Routes>
            </UserContext.Provider>
        </MemoryRouter>
    );

    expect(getByText("Mock Component")).toBeInTheDocument();
});

it("redirects if user is not logged in", () => {
    const currentUser = null
    const setCurrentUser = () => { }

    const { getByText } = render(
        <MemoryRouter initialEntries={["/private"]}>
            <UserContext.Provider value={{ currentUser, setCurrentUser }}>
                <Routes>
                    <Route path="/login" element={<div>Login</div>} />
                    <Route path="/private" element={<PrivateRoute component={MockComponent} />} />
                </Routes>
            </UserContext.Provider>
        </MemoryRouter>
    );

    expect(getByText("Login")).toBeInTheDocument();
});
