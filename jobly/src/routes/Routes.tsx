import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import CompanyList from '../companies/CompanyList';
import CompanyDetail from '../companies/CompanyDetail';
import JobList from '../jobs/JobList';
import Homepage from '../homepage/Homepage';
import LoginForm from '../auth/LoginForm';
import { AuthFuncProp } from '../types/types';
import {PrivateRoute} from './PrivateRoute';
import SignupForm from '../auth/SignupForm';




export default function RoutesFunc({ login, signup, logout }: AuthFuncProp) {
    return (
        <Routes>


            <Route path='/' element={<Homepage />} />

            <Route path='/login' element={<LoginForm login={login} />} />


            <Route path='/signup' element={<SignupForm signup={signup} />} />


            {/* Private Routes */}
            <Route
                path="/companies"
                element={
                    <PrivateRoute path='/companies' component={CompanyList} />
                }
            />

            <Route
                path="/companies:handle"
                element={
                    <PrivateRoute path='/companies' component={CompanyDetail} />
                }
            />

            <Route
                path="/jobs"
                element={
                    <PrivateRoute path='/jobs' component={JobList} />
                }
            />

            {/* <Route
                path="/profile"
                element={
                    <PrivateRoute path='/profile' component={} />
                }
            /> */}

            {/* End of Private Routes */}

            <Route path='*' element={<Navigate to='/' />} />


        </Routes>

    )
}