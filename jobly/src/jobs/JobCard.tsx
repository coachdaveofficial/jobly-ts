import React, { useContext, useEffect, useState } from 'react'
import { Job } from '../types/types'
import UserContext from '../context/UserContext'
import JoblyApi from '../api';
import JobAppsContext from '../context/JobAppsContext';


export default function JobCard({ id, title, salary, equity, companyHandle }: Job) {
  const { currentUser } = useContext(UserContext);
  const { applicationIds, setApplicationIds } = useContext(JobAppsContext);
  const [applied, setApplied] = useState<boolean>();


  function hasAppliedToJob(id: number) {
    return applicationIds.has(id);
  }

  useEffect(function updateAppliedStatus() {
    setApplied(hasAppliedToJob(id));
  }, [id, hasAppliedToJob]);

  async function handleApply() {
    if (hasAppliedToJob(id)) return;
    try {
      await JoblyApi.applyToJob(currentUser?.username, id)

      setApplicationIds((prevData: Set<number>) => {
        console.log(prevData);
        if (prevData !== null) {
          return new Set([...prevData, id]);
        }
        return new Set([id])
      });

      return { success: true }
    } catch (error) {
      console.error("Application failed", error)
      return { success: false, error }
    }
  }
  return (
    <div className="JobCard card my-2" id={`job-${id}`}>
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <p>{companyHandle}</p>
        {salary && <div><small>Salary: {'$' + salary.toLocaleString()}</small></div>}
        {equity !== undefined && <div><small>Equity: {equity}</small></div>}
        <button
              className="btn btn-info font-weight-bold text-uppercase float-end"
              onClick={handleApply}
              disabled={applied}
          >
            {applied ? "Applied" : "Apply"}
          </button>
        </div>
      </div>
  );
}
