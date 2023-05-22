import { useState } from "react"
import axiosInstance from "../healpers/axios.config"
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Registration = ()=>{
    const [searchParams] = useSearchParams();
    let navigate = useNavigate();
    const [formData,setFormData] = useState({
        email:'',
        password:'',
    })
    const handleChangeField = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const handleRegistrationSubmit = (e)=>{
        e.preventDefault()
        const params = searchParams.get('id');
        let URL = '';
        if(params){
            URL = `auth/registration/?id=${params}`;
        }
        else{
            URL = `auth/registration/?id=#`;
        }
        axiosInstance.post(URL,formData)
        .then(response=>{
            console.log(response);
            navigate('/');
        })
    }
    return(
        <div className="login-wrapper w-full h-screen flex justify-center items-center">
            <div className="form-wrapper px-[40px] py-[50px] rounded-[8px] shadow">
                <form onSubmit={handleRegistrationSubmit}>
                    <div className="grid grid-flow-row gap-6">
                        <div className="input">
                            <div className="label mb-2">
                                <label htmlFor="">Email</label>
                            </div>
                            <input id="" type="email" name="email" value={formData.email} onChange={handleChangeField} placeholder="Email" className="px-[10px] py-[10px] rounded-[5px] border border-gray-300 !outline-none h-[40px] w-[400px]" />
                        </div>
                        <div className="input">
                            <div className="label mb-2">
                                <label htmlFor="">Password</label>
                            </div>
                            <input type="password" name="password" value={formData.password} onChange={handleChangeField} placeholder="Password" className="px-[10px] py-[10px] rounded-[5px] border border-gray-300 !outline-none h-[40px] w-[400px]" />
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
export default Registration;