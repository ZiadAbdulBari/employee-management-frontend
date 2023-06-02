import { createContext, useEffect, useState } from 'react';
import axiosInstance from "../../healpers/axios.config";
import toastMessage from "../../healpers/toast";
// import { Navigate  } from "react-router-dom";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState('');
    const [userDetails, setUserDetails] = useState({});

    const login = async (credentials) => {
        const URL = 'auth/login/';
        axiosInstance.post(URL,credentials)
        .then((res)=>{
            setIsLoggedIn(true);
            window.localStorage.setItem('isLoggedIn',JSON.stringify(true));
            window.localStorage.setItem('token',JSON.stringify(res.data.access_token));
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
            window.localStorage.setItem('detail',JSON.stringify(response.data.details));
        })
    }
    const logout = async () => {
        window.localStorage.removeItem('isLoggedIn');
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('detail');
    };
    const getDataFromLocal = async()=>{
        const loginStatus = JSON.parse(window.localStorage.getItem('isLoggedIn'));
        if(loginStatus==null || loginStatus==undefined){
            setIsLoggedIn(false);
            setToken('');
            setUserDetails({});
        }
        else{
            const accessToken = JSON.parse(window.localStorage.getItem('token'));
            const userData = JSON.parse(window.localStorage.getItem('detail'));
            setIsLoggedIn(true);
            setUserDetails(userData);
            setToken(accessToken);
        }
    }
    useEffect(()=>{
        getDataFromLocal();
    },[isLoggedIn]);
    return (
        <AuthContext.Provider value={{ isLoggedIn, token, userDetails, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };