import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Login from './pages/Login';
import Register from './pages/Register';
// import IndDashboard from './pages/IndDashboard';
// import AdminDashboard from './pages/AdminDashboard'

function App() {
 

  return (
    <Router>
      <Toaster/>
      <Routes>
            <Route path="/" element={<Register/>} />
           <Route path="/login" element={<Login/>} />
           {/* <Route path="/userdash" element={<IndDashboard/>} /> */}
           {/* <Route path="/admindash" element={<AdminDashboard/>} /> */}
      </Routes>
    </Router>
  )
}

export default App
