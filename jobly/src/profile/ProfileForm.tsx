import React, { useContext, useState } from 'react'
import '../auth/Login.css'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext'
import JoblyApi from '../api'





export default function ProfileForm() {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const navigate = useNavigate();

    const INITIAL_STATE = {
        username: currentUser?.username,
        firstName: currentUser?.firstName,
        lastName: currentUser?.lastName,
        password: "",
        email: currentUser?.email
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = evt.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) =>{
        evt.preventDefault();
        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
          };
      
          let username = formData.username;
          let password = formData.password;
          let updatedUser;
      
          try {
            await JoblyApi.login({username, password });
            updatedUser = await JoblyApi.saveProfile(username, profileData);
            alert("Successfully updated!")
          } catch (errors) {
            alert(errors)
            return;
          }

          setCurrentUser(updatedUser);

    }

    return (
        <>
            <form className='my-2 col-md-8 offset-md-2' onSubmit={handleSubmit}>

                <div className="login-container">
                    <label className='form-label' htmlFor="username"><b>Username</b></label>
                    <input 
                    disabled
                    className='form-control'
                    id='username'
                    type="text" 
                    placeholder="Enter Username" 
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required 
                    />


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

                    <button className='btn btn-primary' type="submit">Update Profile</button>

                </div>

                <div className="login-container" style={{ backgroundColor: '#f1f1f1' }}>
                    <button type="button" className="cancelbtn btn btn-danger" onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </>

    )
}