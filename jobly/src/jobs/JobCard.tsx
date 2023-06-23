import React from 'react'
import { Job } from '../types/types'

export default function JobCard({id, title, salary, equity, companyHandle}:Job) {
    return (
        <div className="JobCard card"> 
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p>{companyHandle}</p>
          {salary && <div><small>Salary: {'$'+salary.toLocaleString()}</small></div>}
          {equity !== undefined && <div><small>Equity: {equity}</small></div>}
        </div>
      </div>
    )
}
