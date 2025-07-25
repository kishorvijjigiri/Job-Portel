
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Register';
import Login from './Login';
import UserPage from './UserPage';
import AdminPage from './AdminPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
