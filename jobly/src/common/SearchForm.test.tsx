import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchForm from "./SearchForm";

it("matches snapshot", function () {
    const { asFragment } = render(
        <MemoryRouter>
            <SearchForm searchFor={function (searchTerm: string | undefined): void {
                throw new Error("Function not implemented.");
            } } />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});

it("renders the search form", function () {
    const {getByPlaceholderText, getByText} = render(<SearchForm searchFor={function (searchTerm: string | undefined): void {
        throw new Error("Function not implemented.");
    } } />)

    expect(getByPlaceholderText("Enter search term..."));
    expect(getByText("Submit"));
})