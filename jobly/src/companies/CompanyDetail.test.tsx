import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, useParams } from "react-router-dom";
import JoblyApi from "../api";
import CompanyDetail from "./CompanyDetail";

it("matches the snapshot", function () {
    const { asFragment } = render(
        <MemoryRouter>
            <CompanyDetail />
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
    getCompany: jest.fn(),
}));

const mockCompany = {
    name: 'Example Company',
    description: 'Lorem ipsum dolor sit amet',
    jobs: [
        { id: 1, title: 'Job 1', salary: 50000, equity: 0.2, companyHandle: 'example-handle' },
        { id: 2, title: 'Job 2', salary: 60000, equity: 0.3, companyHandle: 'example-handle' },
    ],
};

beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ handle });
});

test('renders the company details', async () => {
    (JoblyApi.getCompany as jest.Mock).mockResolvedValue(mockCompany);

    const {getByText, findByText} = render(<CompanyDetail />);

    expect(getByText('Loading...')).toBeInTheDocument();

    // Wait for the component to finish loading
    await findByText(mockCompany.name);

    expect(getByText(mockCompany.name)).toBeInTheDocument();
    expect(getByText(mockCompany.description)).toBeInTheDocument();
    expect(getByText('Job 1')).toBeInTheDocument();
    expect(getByText('Job 2')).toBeInTheDocument();
});
