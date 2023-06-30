import React from "react";
import { act, render, waitFor, screen } from "@testing-library/react";
import { MemoryRouter, useParams } from "react-router-dom";
import CompanyList from "./CompanyList";
import JoblyApi from "../api";

it("matches the snapshot", function () {
    const { asFragment } = render(
        <MemoryRouter>
            <CompanyList />
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

const handle = 'example-handle';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
}));

jest.mock('../api', () => ({
    getCompanies: jest.fn(),
}));

const mockCompany = {
    name: 'Example Company',
    description: 'Lorem ipsum dolor sit amet',
    jobs: [
        { id: 1, title: 'Job 1', salary: 50000, equity: 0.2, companyHandle: 'example-handle' },
        { id: 2, title: 'Job 2', salary: 60000, equity: 0.3, companyHandle: 'example-handle' },
    ],
};

/*
test('renders the company details', async () => {
    (JoblyApi.getCompanies as jest.Mock).mockResolvedValue(mockCompany);
  
    await act(async () => {
      const { getByText, findByText } = render(<CompanyList />);
  
      // Wait for the component to finish loading
      await findByText(mockCompany.name);
  
      expect(findByText(mockCompany.name)).toBeInTheDocument();
      expect(getByText(mockCompany.name)).toBeInTheDocument();
      expect(getByText(mockCompany.description)).toBeInTheDocument();
      expect(getByText('Job 1')).toBeInTheDocument();
      expect(getByText('Job 2')).toBeInTheDocument();
    });
});
*/
