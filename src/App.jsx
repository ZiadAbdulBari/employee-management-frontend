// import Layout from "./components/layouts/Layout"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
import Todo from './pages/Todo';
import Settings from './pages/Settings';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/registration" element={<Registration/>} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/employee" element={<Employee/>}/>
            <Route path="/todo" element={<Todo/>}/>
            <Route path="/setting" element={<Settings/>}/>
        </Routes>
      </Router>
      <ToastContainer/>
    </>
    
  )
}

export default App
