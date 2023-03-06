import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Login from './auth/Login';
import Signup from './auth/Signup';
import AddEmployee from './home/employee/AddEmployee';
import EmployeeList from './home/employee/EmployeeList';
import Home from './home/Home';

const ReactRoutes = (props) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route
          path='login'
          element={<Login showAlert={props.showAlert} />}
        ></Route>
        <Route
          path='signup'
          element={<Signup showAlert={props.showAlert} />}
        ></Route>
        <Route path='home' element={<Home showAlert={props.showAlert} />}>
          <Route
            path='list'
            element={<EmployeeList showAlert={props.showAlert} />}
          />
          <Route
            path='add'
            element={<AddEmployee showAlert={props.showAlert} />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default ReactRoutes;
