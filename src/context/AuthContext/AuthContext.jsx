import { createContext, useState } from 'react';
import axiosInstance from "../../healpers/axios.config";
import toastMessage from "../../healpers/toast";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [token,setToken] = useState('');
    // const [detail,setDetail]=useState({});

    const login = async (credentials) => {
        const URL = 'auth/login/';
        axiosInstance.post(URL,credentials)
        .then((res)=>{
            setIsLoggedIn(true);
            // setToken(res.data.access_token);
            window.localStorage.setItem('isLoggedIn',true);
            window.localStorage.setItem('token',res.data.access_token);
            details(res.data.access_token);
            toastMessage(res.data.mgs,'s');
        })
        .catch(error=>{
            toastMessage(error.message,'e');
        })
    };
    const details = async (token)=>{
        const URL = '/employee/user-details/';
        axiosInstance.get(URL,{ headers: { Authorization:token}})
        .then(response=>{
            // setDetail(response.data.details);
            window.localStorage.setItem('detail',JSON.stringify(response.data.details));
        })
    }
    // const getDataFromLocal = ()=>{
    //     window.localStorage.getItem('isLoggedIn');
    //     window.localStorage.getItem('token');
    //     window.localStorage.getItem('detail',JSON.stringify(isLoggedIn));
    // }
    const logout = async () => {
        window.localStorage.removeItem('isLoggedIn');
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('detail');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout}}>
        {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };