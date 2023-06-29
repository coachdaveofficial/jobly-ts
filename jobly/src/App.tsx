import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesFunc from './routes/Routes';
import NavBarFunc from './routes/NavBar';
import JoblyApi from './api'
import { LoginData, LogoutFunction, SignupData, UpdateProfileData, User } from './types/types'
import UserContext from './context/UserContext';
import { decodeToken } from "react-jwt";
import useLocalStorage from './hooks/useLocalStorage';
import JobAppsContext from './context/JobAppsContext';



export const TOKEN_STORAGE_ID = "jobly-token";




function App() {

  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [applicationIds, setApplicationIds] = useState<Set<number>>(new Set([]));


  useEffect(() => {
    async function getUserInfo() {
      if (token) {
        try {
          let decodedToken = decodeToken<User>(token)
          if (decodedToken !== null) {
            const { username } = decodedToken;
            JoblyApi.token = token;
            let currentUser = await JoblyApi.getCurrentUser(username);
            setCurrentUser(currentUser);
            setApplicationIds(new Set(currentUser.applications));
          }
        } catch (error) {
          console.error('App getUserInfo: error', error)
          setCurrentUser(null);
        }
      }
    }

    getUserInfo()
  }, [token])

  async function login(data: LoginData) {
    try {
      setToken(await JoblyApi.login(data));
      return { success: true }

    } catch (error) {
      console.error("login failed", error);
      return { success: false, error }
    }
  }

 

  const logout: LogoutFunction = () => {
    setCurrentUser(null);
    setToken(null);
  }

  async function signup(data: SignupData) {
    try {
      setToken(await JoblyApi.signup(data));
      return { success: true }
    } catch (error) {
      console.error("signup failed", error)
      return { success: false, error }
    }
  }

  

  return (
    <div className="App">
      <BrowserRouter>

        <JobAppsContext.Provider value={{applicationIds, setApplicationIds}}>
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
          <NavBarFunc logout={logout} />
          <RoutesFunc login={login} signup={signup} />
        </UserContext.Provider>
        </JobAppsContext.Provider>


      </BrowserRouter>

    </div>
  );
}

export default App;
