// import Layout from "./components/layouts/Layout"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
import Todo from './pages/Todo';
import Settings from './pages/Settings';
import TodoList from './pages/TodoList';
import EmployeeList from './pages/EmployeeList';
import { AuthProvider } from './context/AuthContext/AuthContext';
import Profile from './pages/Profile';
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/registration" element={<Registration/>} />
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/employee" element={<Employee/>}/>
              <Route path="/employee-list" element={<EmployeeList/>}/>
              <Route path="/todo" element={<Todo/>}/>
              <Route path="/todo-list" element={<TodoList/>}/>
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
