import React, { useState } from 'react'
import './Login.css'
import { SignupFuncProp } from '../types/types'
import { useNavigate } from 'react-router-dom'
import Alert from '../common/Alert'



export default function SignupForm({ signup }: SignupFuncProp) {
    const INITIAL_STATE = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""

    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [formErrors, setFormErrors] = useState([]);
    const navigate = useNavigate();

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        let result = await signup(formData);
        if (result.success) {
            navigate('/companies')
        } else {
            setFormErrors(result.error);
        }

    }

    return (
        <>
            <form className='my-2 col-md-8 offset-md-2' onSubmit={handleSubmit}>

                <div className="login-container">
                    <label className='form-label' htmlFor="username"><b>Username</b></label>
                    <input
                        className='form-control'
                        id='username'
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />

                    <label className='form-label' htmlFor="password"><b>Password</b></label>
                    <input
                        className='form-control'
                        id='password'
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required />

                    <label className='form-label' htmlFor="firstName"><b>First Name</b></label>
                    <input
                        className='form-control'
                        id='firstName'
                        type="text"
                        placeholder="Enter First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required />

                    <label className='form-label' htmlFor="lastName"><b>Last Name</b></label>
                    <input
                        className='form-control'
                        id='lastName'
                        type="text"
                        placeholder="Enter Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required />

                    <label className='form-label' htmlFor="email"><b>Email</b></label>
                    <input
                        className='form-control'
                        id='email'
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required />
                        
                    {formErrors.length
                        ? <Alert type="danger" messages={formErrors} />
                        : null}

                    <button className='btn btn-primary' type="submit">Signup</button>

                </div>

                <div className="login-container" style={{ backgroundColor: '#f1f1f1' }}>
                    <button type="button" className="cancelbtn btn btn-danger" onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </>

    )
}