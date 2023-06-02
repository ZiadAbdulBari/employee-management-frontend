import {  useContext } from "react";
import { useNavigate,NavLink } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext/AuthContext';
const Header = ()=>{
    let navigate = useNavigate();
    const { logout } = useContext(AuthContext);
    const handleLogout=()=>{
        logout();
       navigate('/');
    }
    return(
        <div className="header flex justify-end p-[10px] bg-white w-full">
            <div className="group auth relative h-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                    <circle cx="24.5" cy="20.4167" r="6.125" stroke="#0B2447" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="24.5" cy="24.5" r="18.375" stroke="#0B2447" strokeWidth="2"/>
                    <path d="M36.75 38.1912C36.0274 36.0206 34.4353 34.1025 32.2204 32.7345C30.0055 31.3665 27.2918 30.625 24.5 30.625C21.7082 30.625 18.9945 31.3665 16.7796 32.7345C14.5647 34.1025 12.9726 36.0206 12.25 38.1912" stroke="#0B2447" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div className="group-hover:block hidden w-[200px] absolute top-[48px] right-0 bg-white wrapper-shadow px-[20px]">
                    <ul>
                        <li className="py-[10px] cursor-pointer"><NavLink to="/profile">Profile</NavLink></li>
                        {/* <li className="py-[10px] cursor-pointer">Setting</li> */}
                        <li className="py-[10px] cursor-pointer" onClick={handleLogout}>Logout</li>
                    </ul>

                </div>
            </div>
            <div></div>
        </div>
    );
}
export default Header;