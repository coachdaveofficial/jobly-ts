import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import CompanyList from '../companies/CompanyList';
import CompanyDetail from '../companies/CompanyDetail';


export default function RoutesFunc() {
    return (
        <Routes>


            <Route path='/' element={<div>home</div>} />


            <Route path='/companies' element={<CompanyList />} />




            <Route path='/companies/:handle' element={<CompanyDetail />} />


            <Route path='/jobs' element={<div>jobs</div>} />


            <Route path='/login' element={<div>login</div>} />


            <Route path='/signup' element={<div>signup</div>} />


            <Route path='/profile' element={<div>profile</div>} />


            <Route path='*' element={<Navigate to='/' />} />


        </Routes>

    )
}