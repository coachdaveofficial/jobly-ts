import React, { useState, useEffect } from 'react'
import { Job } from '../types/types';
import JoblyApi from '../api'
import JobCard from './JobCard';

export default function JobList() {
    const [jobs, setJobs] = useState<Job[]>();
    const [title, setTitle] = useState<string>();
    useEffect(() => {
        async function getJobsOnMountAndSearch() {
            setJobs(await JoblyApi.getJobs(title));
            
        }
        getJobsOnMountAndSearch()
    }, [title]);

    if (!jobs) return <div>Loading...</div>

    return (
        <div className='col-md-8 offset-md-2 text-start'>
            {jobs.map(
                job =>
                    <JobCard
                        key={job.id}
                        id={job.id}
                        title={job.title}
                        salary={job.salary}
                        equity={job.equity}
                        companyHandle={job.companyHandle}
                    />
            )}
        </div>
    )

}

