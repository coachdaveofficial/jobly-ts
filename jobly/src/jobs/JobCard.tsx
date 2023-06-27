import React, { useContext } from 'react'
import { Job } from '../types/types'
import UserContext from '../context/UserContext'
import JoblyApi from '../api';
import JobAppsContext from '../context/JobAppsContext';


export default function JobCard({ id, title, salary, equity, companyHandle }: Job) {
  const {currentUser} = useContext(UserContext);
  const {appliedJobsIds, setAppliedJobsIds} = useContext(JobAppsContext)
  async function handleApply() {
    try {
      await JoblyApi.applyToJob(currentUser?.username, id)
      
      type issues below
      
      setAppliedJobsIds(prevData => {
        console.log(prevData);
        if (prevData !== undefined && prevData !== null) {
          return new Set([...prevData, id]);
        }
        return [id];
      });

      return { success: true }
    } catch (error) {
      console.error("signup failed", error)
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

        {
          appliedJobsIds?.find(appliedJobId => appliedJobId = id)
            ?
            <button className='float-end btn btn-primary' disabled>Applied</button>
            :
            <button className='float-end btn btn-primary' onClick={handleApply} >Apply</button>
        }

      </div>

    </div>
  )
}
