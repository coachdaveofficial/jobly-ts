import React, { useEffect, useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesFunc from './routes/Routes';
import NavBarFunc from './routes/NavBar';
import JoblyApi from './api'
import { Company } from './types/types'


export const CompaniesContext = React.createContext<Company[]>([]);

function App() {

  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    async function getCompaniesAndJobs() {
      let companies: Company[] = await JoblyApi.getCompanies();
      setCompanies(companies);
      setIsLoading(false);
    }

    getCompaniesAndJobs();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarFunc />
        <CompaniesContext.Provider value={companies}>
          <RoutesFunc />
        </CompaniesContext.Provider>

      </BrowserRouter>

    </div>
  );
}

export default App;
