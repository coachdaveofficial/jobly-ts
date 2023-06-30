import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import JobList from "./JobList";

it("matches snapshot", () => {
    const {asFragment} = render(
        <MemoryRouter>
            <JobList />
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("renders without crashing", () => {
    const {getByText} = render(<JobList />);


    expect(getByText("Loading...")).toBeInTheDocument();
})