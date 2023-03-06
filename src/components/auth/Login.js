import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';

const Login = (props) => {
  const context = useContext(UserContext);
  const navigation = useNavigate();

  const { login, setSpinnerStatus } = context;
  const initializeLoginForm = {
    email: '',
    password: '',
  };

  const [loginForm, setLoginForm] = useState(initializeLoginForm);

  const onFieldChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setSpinnerStatus(true);
    e.preventDefault();
    try {
      const response = await login(loginForm);
      if (response.status) {
        localStorage.setItem('token', JSON.stringify(response.data.token));
        navigation('/home/list');
        props.showAlert('Login Successfull !!!', 'success', 'Success');
        setSpinnerStatus(false);
      }
    } catch (err) {
      const errData = err.response.data;
      props.showAlert(errData.message, 'danger', 'Error');
      setSpinnerStatus(false);
      throw err;
    }
  };

  return (
    <div className='container'>
      <div className='offset-md-4 col-md-4'>
        <div className='login-window'>
          <h3 className='text-center'>Login Form</h3>
          <form onSubmit={handleSubmit}>
            <div className='mb-4 row text-center'>
              <label htmlFor='staticEmail' className='col-sm-3 col-form-label'>
                Email
              </label>
              <div className='col-sm-9'>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  value={loginForm.email}
                  onChange={onFieldChange}
                />
              </div>
            </div>
            <div className='mb-4 row text-center'>
              <label
                htmlFor='inputPassword'
                className='col-sm-3 col-form-label'
              >
                Password
              </label>
              <div className='col-sm-9'>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  value={loginForm.password}
                  onChange={onFieldChange}
                />
              </div>
            </div>
            <div className='text-center'>
              <button className='btn btn-primary' type='submit'>
                Submit
              </button>
              <button
                type='button'
                className='btn btn-success mx-4'
                onClick={() => setLoginForm({ ...initializeLoginForm })}
              >
                Reset
              </button>
            </div>
            <Link to='/signup'>Sign up</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
