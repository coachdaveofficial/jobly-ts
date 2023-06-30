import React from "react";
import { render } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { MemoryRouter } from "react-router";
import { LoginData } from "../types/types";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <LoginForm login={function (data: LoginData): Promise<{ success: boolean; error?: any; }> {
        throw new Error("Function not implemented.");
      } } />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders the login form', () => {
  const {getByLabelText, getByText} = render(<LoginForm login={function (data: LoginData): Promise<{ success: boolean; error?: any; }> {
    throw new Error("Function not implemented.");
  } } />)
  // Ensure the form elements are rendered
  expect(getByLabelText('Username')).toBeInTheDocument();
  expect(getByLabelText('Password')).toBeInTheDocument();
  expect(getByText('Login')).toBeInTheDocument();
  expect(getByText('Cancel')).toBeInTheDocument();
});