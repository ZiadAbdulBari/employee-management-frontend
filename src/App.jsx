import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Employee from "./pages/Employee/Employee";
import Task from './pages/Task/Task';
import Settings from './pages/Settings/Settings';
import TaskList from './pages/TaskList/TaskList';
import EmployeeList from './pages/Employee-list/EmployeeList';
import { AuthProvider } from './context/AuthContext/AuthContext';
import Profile from './pages/Profile/Profile';
// import ProtectedRoute from './healpers/protectRoute';
function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/registration" element={<Registration/>} />
              <Route path="/dashboard" element={ <Dashboard/>}/>
              <Route path="/employee" element={<Employee/>}/>
              <Route path="/employee-list" element={<EmployeeList/>}/>
              <Route path="/task" element={<Task/>}/>
              <Route path="/task-list" element={<TaskList/>}/>
              <Route path="/setting" element={<Settings/>}/>
              <Route path="/profile" element={<Profile/>}/>
              
          </Routes>
        </Router>
      </AuthProvider>
      <ToastContainer/>
    </>
    
  )
}

export default App
