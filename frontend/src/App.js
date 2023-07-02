import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from'./pages/Dashboard';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import ParentPortal from './pages/ParentPortal';
import Register from './pages/Register';
import ErrorPage from './pages/ErrorPage';
import { BrowserRouter } from 'react-router-dom';
import TokenContext from './contexts/Token';

function App() {
  const[pageSelector, setPageSelector] = React.useState("login");
  const[page, setPage] = React.useState(<Login />);
  const[loggedOut, setLoggedOut] = React.useState("")
  const[token, setToken] = React.useState('')
  const[user, setUser] = React.useState()

  return (
    <TokenContext.Provider value={{token, setToken, user, setUser}}>
      <BrowserRouter>
        <Navbar handlePage={e => setPageSelector(e)} setLoggedOut={e => setLoggedOut(e)}/>
        <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login setPageSelector={e => setPageSelector(e)}/>} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/portal" element={<ParentPortal />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}

export default App;
