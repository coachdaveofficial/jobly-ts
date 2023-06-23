import React, { useState, useEffect } from 'react'
import { Company } from '../types/types';
import JoblyApi from '../api'
import CompanyCard from './CompanyCard';

/**
 * Renders a list of all companies 
 */
export default function CompanyList() {
    const [companies, setCompanies] = useState<Company[]>([]);
    useEffect(function getCompaniesOnMount() {
        search(undefined);
    }, []);

    /** Triggered by search form submit; reloads companies. */
    async function search(name:string | undefined) {
        let companies: Company[] = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }

    if (!companies) return <div>Loading...</div>

    return (
        <div className='col-md-8 offset-md-2'>
            {companies.map((c) => (
                <CompanyCard 
                    key={c.handle}
                    name={c.name}
                    description={c.description}
                    logoUrl={c.logoUrl} 
                    handle={c.handle} 
                    numEmployees={c.numEmployees} 
                    jobs={c.jobs}                   
                    />

            ))}
        </div>
    );
}