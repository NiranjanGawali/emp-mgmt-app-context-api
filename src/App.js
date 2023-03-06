import './App.css';
import ReactRoutes from './components/ReactRoutes';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useContext, useState } from 'react';
import Alert from './components/common/Alert';
import UserContext from './context/user/UserContext';
import SpinnerData from './components/common/SpinnerData';

function App() {
  const context = useContext(UserContext);
  const { spinnerStatus } = context;
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type, msgType) => {
    setAlert({ type: type, msg: message, msgType: msgType });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <div className='App'>
      <Alert alert={alert} />
      <ReactRoutes showAlert={showAlert} />
      {spinnerStatus && <SpinnerData />}
    </div>
  );
}

export default App;
