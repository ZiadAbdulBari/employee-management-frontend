import { useState, useContext } from "react";
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { useNavigate, Link } from "react-router-dom";
const Login = ()=>{
    let navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [state,setState] = useState({email:'',password:''});
    const handleChangeField = (e)=>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    const handleLoginSubmit=async (e)=>{
        e.preventDefault();
        login(state)
        .then(()=>{
            navigate('/dashboard');
        })
    }
    return(
        <div className="login-wrapper w-full h-screen flex justify-center items-center">
            <div className="form-wrapper px-[40px] py-[50px] rounded-[8px] wrapper-shadow">
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
                        <p className="text-center text-primary">If you have no account, please <Link to='/registration' className="font-bold">signup</Link></p>
                        <div className="button text-center bg-primary text-secondary-1 py-[20px] rounded-[5px] font-medium text-[20px]">
                            <button>Signin</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;