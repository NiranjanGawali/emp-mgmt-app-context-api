import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiFillEdit } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import format from 'date-fns/format';

import 'react-datepicker/dist/react-datepicker.css';
import EmployeeContext from '../../../context/employee/EmployeeContext';

const EditEmployee = (props) => {
  const context = useContext(EmployeeContext);
  const { updateEmployeeData } = context;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { employeeDetails, showAlert } = props;

  const addEmpFormInitialize = {
    emp_no: employeeDetails.emp_no,
    birth_date: new Date(employeeDetails.birth_date),
    first_name: employeeDetails.first_name,
    last_name: employeeDetails.last_name,
    gender: employeeDetails.gender,
    hire_date: new Date(employeeDetails.hire_date),
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
    updateEmployeeData(payload);
    props.showAlert(
      'Employee record updated successfully !!!',
      'success',
      'Success'
    );
    handleClose();
  };

  return (
    <>
      <AiFillEdit onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                    readOnly
                  />
                </div>
              </div>
              <div className='mb-4 row'>
                <label htmlFor='birth_date' className='col-sm-2 col-form-label'>
                  Birthdate
                </label>
                <div className='col-sm-9'>
                  <DatePicker
                    selected={new Date(addEmpForm.birth_date)}
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
                      checked={addEmpForm.gender === 'M'}
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
                      checked={addEmpForm.gender === 'F'}
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
              <div className='text-center'></div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditEmployee;
