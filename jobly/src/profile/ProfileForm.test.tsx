import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProfileForm from './ProfileForm'

it("matches the snapshot", () => {
    const { asFragment } = render(
        <MemoryRouter>
            <ProfileForm />
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("renders without crashing", () => {
    const { getByLabelText, getByText } = render(
        <MemoryRouter>
            <ProfileForm />
        </MemoryRouter>
    );

    expect(getByLabelText("First Name")).toBeInTheDocument();
    expect(getByLabelText("Last Name")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
    expect(getByLabelText("Email")).toBeInTheDocument();
    expect(getByText("Update Profile")).toBeInTheDocument();
    expect(getByText("Cancel")).toBeInTheDocument();
})