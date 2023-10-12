import logo from './logo.svg';
import './App.css';
import { Register } from './pages/Register';
import './style.scss'
import { Login } from './pages/Login';
import { Home } from './pages/Home';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login" />
    }
  }

  return (
    // <Home />
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <Register />
  );
}

export default App;
