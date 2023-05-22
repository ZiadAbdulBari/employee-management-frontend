import axiosInstance from "../healpers/axios.config";
import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ()=>{
    let navigate = useNavigate();
    // const [searchParams, setSearchParams] = useSearchParams()
    // setSearchParams(searchParams.get('id'));
    // console.log(searchParams)
    useEffect(()=>{
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('isLoggedIn');
    },[]);
    const [state,setState] = useState({email:'',password:''});
    const handleChangeField = (e)=>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    const handleLoginSubmit=(e)=>{
        e.preventDefault();
        const URL = 'auth/login/';
        axiosInstance.post(URL,state)
        .then((res)=>{
            console.log(res);
            window.localStorage.setItem('token',res.data.access_token);
            window.localStorage.setItem('isLoggedIn',true);
            navigate('/dashboard');
        })
    }
    return(
        <div className="login-wrapper w-full h-screen flex justify-center items-center">
            <div className="form-wrapper px-[40px] py-[50px] rounded-[8px] shadow">
                <form onSubmit={handleLoginSubmit}>
                    <div className="grid grid-flow-row gap-6">
                        <div className="input">
                            <div className="label mb-2">
                                <label htmlFor="">Email</label>
                            </div>
                            <input id="" type="email" name="email" value={state.email} onChange={handleChangeField} placeholder="Email" className="px-[10px] py-[10px] rounded-[5px] border border-gray-300 !outline-none h-[40px] w-[400px]" />
                        </div>
                        <div className="input">
                            <div className="label mb-2">
                                <label htmlFor="">Password</label>
                            </div>
                            <input type="password" name="password" value={state.password} onChange={handleChangeField} placeholder="Password" className="px-[10px] py-[10px] rounded-[5px] border border-gray-300 !outline-none h-[40px] w-[400px]" />
                        </div>
                        <div className="button text-center">
                            <button>Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;