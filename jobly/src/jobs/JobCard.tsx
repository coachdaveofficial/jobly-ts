import React, { useState } from 'react'
import { Job } from '../types/types'

export default function JobCard({id, title, salary, equity, company_handle}:Job) {
    return (
        <div className="JobCard card"> 
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p>{company_handle}</p>
          {salary && <div><small>Salary: {'$'+salary.toLocaleString()}</small></div>}
          {equity !== undefined && <div><small>Equity: {equity}</small></div>}

        </div>
      </div>
    )
}
