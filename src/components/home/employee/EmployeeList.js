import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import EmployeeContext from '../../../context/employee/EmployeeContext';
import UserContext from '../../../context/user/UserContext';
import EmployeeDetails from './EmployeeDetails';

const EmployeeList = (props) => {
  const context = useContext(EmployeeContext);
  const { employeeData, getEmployeeData, count } = context;

  const userContextData = useContext(UserContext);
  const { setSpinnerStatus } = userContextData;

  const navigation = useNavigate();

  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    setSpinnerStatus(true);
    async function myFunc() {
      if (localStorage.getItem('token')) {
        await getEmployeeData(pageNo);
        setTimeout(() => {
          setSpinnerStatus(false);
        }, 800);
      } else {
        navigation('/login');
        setSpinnerStatus(false);
      }
    }
    myFunc();
  }, [pageNo]);

  return (
    <div className='container'>
      <div className='row'>
        {employeeData.map((singleEmp) => {
          return (
            <EmployeeDetails
              key={singleEmp.emp_no}
              employeeDetails={singleEmp}
              showAlert={props.showAlert}
            />
          );
        })}
      </div>
      <button
        disabled={count < 10}
        className='btn btn-success'
        onClick={() => setPageNo(pageNo + 1)}
      >
        Load More
      </button>
    </div>
  );
};

export default EmployeeList;
