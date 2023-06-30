import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Homepage from "./Homepage";

it("matches the snapshot", () => {
    const {asFragment} = render(
        <MemoryRouter>
            <Homepage />
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("renders without crashing", () => {
    const {getByText} = render(<Homepage />);

    expect(getByText("Jobly")).toBeInTheDocument();
})