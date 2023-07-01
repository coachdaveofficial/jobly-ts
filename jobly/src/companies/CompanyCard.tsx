import React from "react";
import { Link } from "react-router-dom";
import { Company } from '../types/types';

export default function CompanyCard({ name, description, handle, logoUrl }: Company) {
  return (
    <Link
      className="CompanyCard card mb-4 bg-secondary text-light"
      to={`/companies/${handle}`}
      style={{ textDecoration: "none" }}
    >
      <div className="card-body">
        <h6 className="card-title">
          {name}
          {logoUrl && <img src={logoUrl}
            alt={name}
            className="float-right ml-5" />}
        </h6>
        <p ><small>{description}</small></p>
      </div>
    </Link>
  )
}