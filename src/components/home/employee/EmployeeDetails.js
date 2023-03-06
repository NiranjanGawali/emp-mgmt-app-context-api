import React, { useContext } from 'react';
import Moment from 'react-moment';
import { BsFillTrashFill } from 'react-icons/bs';
import EmployeeContext from '../../../context/employee/EmployeeContext';
import EditEmployee from './EditEmployee';

const EmployeeDetails = (props) => {
  const { employeeDetails, showAlert } = props;

  const context = useContext(EmployeeContext);
  const { deleteEmployeeData } = context;

  const deleteEmp = (empNo) => {
    console.log('In deleteEmp Method.... ', empNo);
    deleteEmployeeData(empNo);
    props.showAlert(
      'Employee record deleted successfully !!!',
      'success',
      'Success'
    );
  };

  return (
    <div className='col-md-4 card-placement'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>
            {employeeDetails.first_name} {employeeDetails.last_name}
          </h5>
          <p className='card-text'>
            Birth Date:
            <Moment format='DD/MM/YYYY'>{employeeDetails.birth_date}</Moment>
          </p>
          <p className='card-text'>Gender: {employeeDetails.gender}</p>
          <div>
            <BsFillTrashFill
              id='rightSide'
              onClick={() => {
                if (window.confirm('Are you sure want to delete ?')) {
                  deleteEmp(employeeDetails.emp_no);
                }
              }}
            />
            <div id='leftSide'>
              <EditEmployee
                employeeDetails={employeeDetails}
                showAlert={props.showAlert}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
