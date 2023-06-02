import { useState } from "react"
import axiosInstance from "../../healpers/axios.config"
import toastMessage from "../../healpers/toast";
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
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
            URL = `auth/registration/?id=false`;
        }
        axiosInstance.post(URL,formData)
        .then(response=>{
            toastMessage(response.data.mgs,'s')
            navigate('/');
        })
        .catch(error=>{
            toastMessage(error.data.mgs,'e');
        })
    }
    return(
        <div className="login-wrapper w-full h-screen flex justify-center items-center">
            <div className="form-wrapper px-[40px] py-[50px] rounded-[8px] wrapper-shadow">
                <p className="text-center mb-8 text-[35px] text-primary ">Welcome to <span className="bg-secondary-1 p-4">EM</span></p>
                <form onSubmit={handleRegistrationSubmit}>
                    <div className="grid grid-flow-row gap-6">
                        <div className="input">
                            <div className="label mb-2">
                                <label htmlFor="">Email</label>
                            </div>
                            <input id="" type="email" name="email" value={formData.email} onChange={handleChangeField} placeholder="Email" className="px-[10px] py-[10px] rounded-[5px] border border-gray-300 !outline-none h-[50px] w-[450px]"/>
                        </div>
                        <div className="input">
                            <div className="label mb-2">
                                <label htmlFor="">Password</label>
                            </div>
                            <input type="password" name="password" value={formData.password} onChange={handleChangeField} placeholder="Password" className="px-[10px] py-[10px] rounded-[5px] border border-gray-300 !outline-none h-[50px] w-[450px]"/>
                        </div>
                        <p className="text-center text-primary">If you have an account, please <Link to='/' className="font-bold">signin</Link></p>
                        <div className="button text-center bg-primary text-secondary-1 py-[20px] rounded-[5px] font-medium text-[20px]">
                            <button>Signup</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default Registration;