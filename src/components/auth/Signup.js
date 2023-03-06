import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';

const Signup = () => {
  const context = useContext(UserContext);
  const { signup } = context;

  const navigation = useNavigate();

  const signupFormInitialize = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [signupForm, setSignupForm] = useState(signupFormInitialize);

  const onFieldChange = (e) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signupForm);
    try {
      const response = await signup(signupForm);
      if (response.status) {
        navigation('/login');
      }
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className='container'>
      <div className='offset-md-3 col-md-6'>
        <div className='login-window'>
          <h3 className='text-center'>Signup Form</h3>
          <form onSubmit={handleSubmit}>
            <div className='mb-4 row text-center'>
              <label htmlFor='name' className='col-sm-2 col-form-label'>
                Name
              </label>
              <div className='col-sm-9'>
                <input
                  type='name'
                  className='form-control'
                  id='name'
                  name='name'
                  onChange={onFieldChange}
                  value={signupForm.name}
                />
              </div>
            </div>
            <div className='mb-4 row text-center'>
              <label htmlFor='staticEmail' className='col-sm-2 col-form-label'>
                Email
              </label>
              <div className='col-sm-9'>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  onChange={onFieldChange}
                  value={signupForm.email}
                />
              </div>
            </div>
            <div className='mb-4 row text-center'>
              <label
                htmlFor='inputPassword'
                className='col-sm-2 col-form-label'
              >
                Password
              </label>
              <div className='col-sm-9'>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  onChange={onFieldChange}
                  value={signupForm.password}
                />
              </div>
            </div>
            <div className='mb-4 row text-center'>
              <label
                htmlFor='confirmPassword'
                className='col-sm-2 col-form-label'
              >
                Confirm Password
              </label>
              <div className='col-sm-9'>
                <input
                  type='password'
                  className='form-control'
                  id='confirmPassword'
                  name='confirmPassword'
                  onChange={onFieldChange}
                  value={signupForm.confirmPassword}
                />
              </div>
            </div>
            <div className='text-center'>
              <button className='btn btn-primary'>Submit</button>
              <button
                type='button'
                className='btn btn-success mx-4'
                onClick={() => setSignupForm(signupFormInitialize)}
              >
                Reset
              </button>
            </div>
            <Link to='/login'>Login</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
