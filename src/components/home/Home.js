import React from 'react';
import { Outlet } from 'react-router';
import EmployeeContextProvider from '../../context/employee/EmployeeContextProvider';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <EmployeeContextProvider>
        <Navbar />
        <Outlet />
      </EmployeeContextProvider>
    </div>
  );
};

export default Home;
