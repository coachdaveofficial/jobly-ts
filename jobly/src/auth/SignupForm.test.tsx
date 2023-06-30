import React from "react";
import { render } from "@testing-library/react";
import SignupForm from "./SignupForm";
import { MemoryRouter } from "react-router";
import { SignupData } from "../types/types";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

it("matches snapshot", function () {
    const { asFragment } = render(
        <MemoryRouter>
            <SignupForm signup={function (data: SignupData): Promise<{ success: boolean; error?: any; }> {
                throw new Error("Function not implemented.");
            }} />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});

it('renders the signup form', () => {

    const { getByLabelText, getByText } = render(<SignupForm signup={function (data: SignupData): Promise<{ success: boolean; error?: any; }> {
        throw new Error("Function not implemented.");
    }} />)
    // Ensure the form elements are rendered
    expect(getByLabelText('Username')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByLabelText('First Name')).toBeInTheDocument();
    expect(getByLabelText('Last Name')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByText('Signup')).toBeInTheDocument();
    expect(getByText('Cancel')).toBeInTheDocument();
});