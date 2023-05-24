import { NavLink } from "react-router-dom";
import "./sidebar.css";
const Sidebar = ()=>{
    return(
        <div className="w-[15%] bg-primary h-screen py-[10px]">
            <div className="logo">
                <p className="text-center text-[#FFC93C] text-[50px]">EM</p>
            </div>
            <div className="modules">
                <ul>
                    <li><NavLink to="/dashboard" className="general">Dashboard</NavLink></li>
                    <li><NavLink to="/employee" className="general">Employee</NavLink></li>
                    <li><NavLink to="/employee-list" className="general">Employee List</NavLink></li>
                    <li><NavLink to="/todo" className="general">Todo</NavLink></li>
                    <li><NavLink to="/todo-list" className="general">Todo List</NavLink></li>
                    <li><NavLink to="/setting" className="general">Settings</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;