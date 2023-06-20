import React from "react";
import { Link } from "react-router-dom";
import { Company } from '../types/types';

export default function CompanyCard({name, description, handle, logo_url}:Company) {
    return (
        <Link className="CompanyCard card" to={`/companies/${handle}`}>
        <div className="card-body">
          <h6 className="card-title">
            {name}
            {logo_url && <img src={logo_url}
                             alt={name}
                             className="float-right ml-5" />}
          </h6>
          <p><small>{description}</small></p>
        </div>
      </Link>
    )
}