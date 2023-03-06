import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';

const Navbar = () => {
  const context = useContext(UserContext);
  const { setSpinnerStatus } = context;

  const navigate = useNavigate();
  const logout = () => {
    setSpinnerStatus(true);
    setTimeout(async () => {
      await setSpinnerStatus(false);
    }, 1000);
    localStorage.clear();
    navigate('/login');
  };
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/home/list'>
            Home
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/home/add'
                >
                  Add Employee
                </Link>
              </li>
            </ul>
            <div className='dropdown'>
              <button
                className='btn btn-outline-secondary dropdown-toggle'
                type='button'
                id='dropdownMenuButton2'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                User
              </button>
              <ul
                className='dropdown-menu dropdown-menu-dark'
                aria-labelledby='dropdownMenuButton2'
              >
                <li>
                  <Link className='dropdown-item' to='/login' onClick={logout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
