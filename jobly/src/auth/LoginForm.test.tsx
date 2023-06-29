import React from "react";
import { render } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { MemoryRouter } from "react-router";
import { LoginData } from "../types/types";

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
