import React, { useState } from 'react'
import './Login.css'
import { LoginFuncProp } from '../types/types'
import { useNavigate } from 'react-router-dom'
// import AuthRedirect from '../common/AuthRedirect'



export default function LoginForm({ login }: LoginFuncProp) {

    const INITIAL_STATE = {
        username: "testuser",
        password: "password"
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
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
        let result = await login(formData);
        if (result.success) {
            navigate('/companies');
        } else {
            alert(result.error);
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

                    <button className='btn btn-primary' type="submit">Login</button>

                </div>

                <div className="login-container" style={{ backgroundColor: '#f1f1f1' }}>
                    <button type="button" className="cancelbtn btn btn-danger" onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </>

    )
}