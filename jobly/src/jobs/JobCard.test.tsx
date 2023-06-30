import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import JobCard from "./JobCard";

it("matches the snapshot", () => {
    const {asFragment} = render(
        <MemoryRouter>
            <JobCard id={0} title={""} salary={null} equity={null} companyHandle={""} />
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("renders without crashing", () => {
    const {getByText} = render(<JobCard id={0} title={"testJob"} salary={null} equity={null} companyHandle={""} />);

    const applyBtn = getByText("Apply");

    expect(getByText("testJob")).toBeInTheDocument();
    expect(applyBtn).toBeInTheDocument();

});