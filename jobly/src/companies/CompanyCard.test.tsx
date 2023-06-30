import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CompanyCard from "./CompanyCard";

it("matches the snapshot", function () {
    const { asFragment } = render(
        <MemoryRouter>
            <CompanyCard handle={""} name={""} numEmployees={null} description={""} logoUrl={null} jobs={null} />
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("renders without crashing", function () {
    const { getByText } = render(
        <MemoryRouter>
            <CompanyCard handle={""} name={"testName"} numEmployees={null} description={"testDescription"} logoUrl={null} jobs={null} />
        </MemoryRouter>

    )

    expect(getByText("testName")).toBeInTheDocument();
    expect(getByText("testDescription")).toBeInTheDocument();

})