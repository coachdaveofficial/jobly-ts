import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import { Company, Job } from '../types/types';


export default function CompanyDetail() {
    const {handle} = useParams();
    const [company, setCompany] = useState<Company>();
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(function getCompanyAndJobsForUser() {
        async function getCompany() {
          setCompany(await JoblyApi.getCompany(handle));    
        }
    
        getCompany();
      }, [handle]);

    if (!company) return <div>Loading...</div>

    return (
        <div className="col-md-8 offset-md-2">
            <h4>{company.name}</h4>
            <p>{company.description}</p>
        </div>
    )
}