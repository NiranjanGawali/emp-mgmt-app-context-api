import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router';
import 'react-datepicker/dist/react-datepicker.css';
import EmployeeContext from '../../../context/employee/EmployeeContext';
import format from 'date-fns/format';

const AddEmployee = () => {
  const context = useContext(EmployeeContext);
  const { addEmployeeData } = context;

  let navigation = useNavigate();
  const addEmpFormInitialize = {
    emp_no: 0,
    birth_date: null,
    first_name: '',
    last_name: '',
    gender: '',
    hire_date: null,
  };

  const [addEmpForm, setEmpForm] = useState(addEmpFormInitialize);

  const onFieldChange = (e) => {
    e.preventDefault();
    setEmpForm({ ...addEmpForm, [e.target.name]: e.target.value });
  };

  const onBirthDateChange = (fieldName, date) => {
    setEmpForm({ ...addEmpForm, [fieldName]: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      emp_no: parseInt(addEmpForm.emp_no),
      birth_date: format(new Date(addEmpForm.birth_date), 'yyyy-MM-dd'),
      first_name: addEmpForm.first_name,
      last_name: addEmpForm.last_name,
      gender: addEmpForm.gender,
      hire_date: format(new Date(addEmpForm.hire_date), 'yyyy-MM-dd'),
    };
    await addEmployeeData(payload);
    navigation('/home/list');
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='offset-md-3 col-md-6'>
          <h3 className='text-center'>Add Employee</h3>
          <form onSubmit={handleSubmit}>
            <div className='field-form'>
              <div className='mb-4 row'>
                <label htmlFor='emp_no' className='col-sm-2 col-form-label'>
                  Employee Number
                </label>
                <div className='col-sm-9'>
                  <input
                    type='number'
                    className='form-control'
                    id='emp_no'
                    name='emp_no'
                    onChange={onFieldChange}
                    value={addEmpForm.emp_no}
                    required
                  />
                </div>
              </div>
              <div className='mb-4 row'>
                <label htmlFor='birth_date' className='col-sm-2 col-form-label'>
                  Birthdate
                </label>
                <div className='col-sm-9'>
                  <DatePicker
                    selected={addEmpForm.birth_date}
                    onChange={(date) => onBirthDateChange('birth_date', date)}
                    value={addEmpForm.birth_date}
                    required
                  />
                </div>
              </div>
              <div className='mb-4 row'>
                <label htmlFor='first_name' className='col-sm-2 col-form-label'>
                  Firstname
                </label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className='form-control'
                    id='first_name'
                    name='first_name'
                    onChange={onFieldChange}
                    value={addEmpForm.first_name}
                    required
                  />
                </div>
              </div>
              <div className='mb-4 row'>
                <label htmlFor='last_name' className='col-sm-2 col-form-label'>
                  Lastname
                </label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className='form-control'
                    id='last_name'
                    name='last_name'
                    onChange={onFieldChange}
                    value={addEmpForm.last_name}
                    required
                  />
                </div>
              </div>
              <div className='mb-4 row text-center'>
                <label htmlFor='gender' className='col-sm-2 col-form-label'>
                  Gender
                </label>
                <div className='col-sm-9 row'>
                  <div className='col-sm-6'>
                    <label htmlFor='male' className='form-check-label'>
                      Male
                    </label>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='gender'
                      id='male'
                      value='M'
                      onChange={onFieldChange}
                      required
                    />
                  </div>
                  <div className='col-sm-6'>
                    <label htmlFor='female' className='form-check-label'>
                      Female
                    </label>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='gender'
                      id='female'
                      value='F'
                      onChange={onFieldChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='mb-4 row'>
                <label htmlFor='hire_date' className='col-sm-2 col-form-label'>
                  Hiredate
                </label>
                <div className='col-sm-9'>
                  <DatePicker
                    selected={addEmpForm.hire_date}
                    onChange={(date) => onBirthDateChange('hire_date', date)}
                    required
                  />
                </div>
              </div>
              <div className='text-center'>
                <button className='btn btn-primary' type='submit'>
                  Submit
                </button>
                <button
                  type='button'
                  className='btn btn-default mx-4'
                  onClick={() => setEmpForm({ ...addEmpFormInitialize })}
                >
                  Reset
                </button>
                <button
                  type='button'
                  className='btn btn-success mx-4'
                  onClick={() => navigation('/home/list')}
                >
                  Back
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
