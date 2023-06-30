import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RoutesFunc from "./Routes";
import { LoginData, SignupData } from "../types/types";

it("matches snapshot", () => {
    const {asFragment} = render(
        <MemoryRouter>
            <RoutesFunc login={function (data: LoginData): Promise<{ success: boolean; error?: any; }> {
                throw new Error("Function not implemented.");
            } } signup={function (data: SignupData): Promise<{ success: boolean; error?: any; }> {
                throw new Error("Function not implemented.");
            } } />
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("renders without crashing", () => {
    render(
        <MemoryRouter>
            <RoutesFunc login={function (data: LoginData): Promise<{ success: boolean; error?: any; }> {
                throw new Error("Function not implemented.");
            } } signup={function (data: SignupData): Promise<{ success: boolean; error?: any; }> {
                throw new Error("Function not implemented.");
            } } />
        </MemoryRouter>
    );
})