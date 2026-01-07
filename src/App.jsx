import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import IndDashboard from './pages/IndDashboard';

function App() {
 

  return (
    <Router>
      <Toaster/>
      <Routes>
           <Route path="/" element={<Register/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="/userdash" element={<IndDashboard/>} />
           <Route path="/admindash" element={<AdminDashboard/>} />
      </Routes>
    </Router>
  )
}

export default App
