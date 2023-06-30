import React, { useState, useEffect } from 'react'
import { Job } from '../types/types';
import JoblyApi from '../api'
import JobCard from './JobCard';
import SearchForm from '../common/SearchForm';

export default function JobList() {
    const [jobs, setJobs] = useState<Job[]>();

    useEffect(function getJobsOnMount() {
        search()
    }, []);

    /** Triggered by search form submit; reloads jobs. */
    async function search(title?: string) {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    }

    if (!jobs) return <div>Loading...</div>

    return (
        <div className='col-md-8 offset-md-2 text-start'>
            <SearchForm searchFor={search} />

            {
                jobs.length ?
                    <>
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
                    </>
                    :
                    <>
                        <h3>Sorry, no results!</h3>
                    </>
            }

        </div>
    )

}

