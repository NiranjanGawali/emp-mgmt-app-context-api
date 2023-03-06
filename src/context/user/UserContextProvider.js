import React, { useState } from 'react';
import UserService from '../../services/UserService';
import UserContext from './UserContext';

const UserContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const [spinnerStatus, setSpinnerStatus] = useState(false);

  const login = async (payload) => {
    try {
      const response = await UserService.login(payload);
      const userData = response.data;
      setUserInfo(userData);
      return userData;
    } catch (err) {
      throw err;
    }
  };

  const signup = async (payload) => {
    try {
      const response = await UserService.signup(payload);
      const result = response.data;
      return result;
    } catch (err) {
      throw err;
    }
  };

  return (
    <UserContext.Provider
      value={{ userInfo, login, signup, spinnerStatus, setSpinnerStatus }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
