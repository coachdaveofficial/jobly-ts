import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesFunc from './routes/Routes';
import NavBarFunc from './routes/NavBar';
import JoblyApi from './api'
import { Company, LoginData, SignupData, User } from './types/types'
import UserContext from './auth/UserContext';
import { decodeToken} from "react-jwt";




function App() {

  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [token, setToken] = useState<string>()
  const [currentUser, setCurrentUser] = useState<User | null>(null)


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

function logout() {
  setCurrentUser(null);
  setToken(undefined)
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
      <NavBarFunc />
      <UserContext.Provider value={currentUser}>
        <RoutesFunc login={login} signup={signup} logout={logout} />
      </UserContext.Provider>


    </BrowserRouter>

  </div>
);
}

export default App;
