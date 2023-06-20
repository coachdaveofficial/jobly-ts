export type Company = {
    handle: string;
    name: string;
    num_employees: number | null;
    description: string;
    logo_url: string | null;
};

export type Job = {
    id: number;
    title: string;
    salary: number | null;
    equity: number | null;
    company_handle: string;
};