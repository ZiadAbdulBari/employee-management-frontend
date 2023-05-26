import { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import Layout from "../components/layouts/Layout";
import axiosInstance from "../healpers/axios.config";
import toastMessage from "../healpers/toast"
const Profile = ()=>{
    const [profile,setProfile] = useState({});
    const [updateStatus,setUpdateStatus] = useState(false);
    const getProfileData = ()=>{
        const URL = '/employee/load-profile/';
        const token = window.localStorage.getItem('token');
        axiosInstance.get(URL,{headers:{Authorization:token}})
        .then(response=>{
            setProfile(response.data.profileData);
        })
    }
    const openUpdateForm = ()=>{
        if(!updateStatus){
            setUpdateStatus(true);
        }
        else{
            setUpdateStatus(false);
        }
    }
    const changeUpdateProfile = (e)=>{
        setProfile(
            {
                ...profile,
                [e.target.name]:e.target.value,
            }
        )
    }
    const handleProfileUpdate = (e)=>{
        e.preventDefault();
        const URL = "/employee/update-profile/";
        const token = window.localStorage.getItem('token');
        console.log(token);
        axiosInstance.post(URL,profile,{headers:{Authorization:token}})
        .then(response=>{
            console.log(response);
            getProfileData();
            setUpdateStatus(false);
            toastMessage(response.data.message,'s');
        })
        .catch(error=>{
            console.log(error);
        })
        // console.log(profile)
    }
    useEffect(()=>{
        getProfileData();
    },[]);
    return(
        <Layout>
            <Wrapper>
                {
                    !updateStatus?
                    <div className="profile">
                        <div className="flex justify-between">
                            <p>Profile</p>
                            <div className="cursor-pointer" onClick={openUpdateForm}>Edit</div>
                        </div>
                    </div>
                    :<div className="update-profile">
                        <p>Update Profile</p>
                        <form onSubmit={handleProfileUpdate}>
                            <div className="grid grid-flow-row grid-cols-2 gap-8 w-full">
                                <div className="input">
                                    <div className="label mb-2">
                                        <label htmlFor="">First Name</label>
                                    </div>
                                    <input id="" type="text" name="first_name" value={profile.first_name} onChange={changeUpdateProfile} placeholder="First Name"  className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                                </div>
                                <div className="input">
                                    <div className="label mb-2">
                                        <label htmlFor="">Last Name</label>
                                    </div>
                                    <input id="" type="text" name="last_name" value={profile.last_name} onChange={changeUpdateProfile} placeholder="Last Name"   className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                                </div>
                                <div className="input">
                                    <div className="label mb-2">
                                        <label htmlFor="">Contact Number</label>
                                    </div>
                                    <input id="" type="text" name="contact_number" value={profile.contact_number} onChange={changeUpdateProfile} placeholder="Contact Number"   className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                                </div>
                                <div className="input">
                                    <div className="label mb-2">
                                        <label htmlFor="">Emargency Contact Number</label>
                                    </div>
                                    <input id="" type="text" name="emargency_contact_number" value={profile.emargency_contact_number} onChange={changeUpdateProfile} placeholder="Emargency Contact Number"   className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                                </div>
                                <div className="input">
                                    <div className="label mb-2">
                                        <label htmlFor="">Official Email</label>
                                    </div>
                                    <input id="" type="email" name="official_email" value={profile.official_email} onChange={changeUpdateProfile} placeholder="Official Email"   className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                                </div>
                                <div className="input">
                                    <div className="label mb-2">
                                        <label htmlFor="">Personal Email</label>
                                    </div>
                                    <input id="" type="email" name="personal_email" value={profile.personal_email} onChange={changeUpdateProfile} placeholder="Personal Email"   className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                                </div>
                                <div className="input">
                                    <div className="label mb-2">
                                        <label htmlFor="">NID Number</label>
                                    </div>
                                    <input id="" type="text" name="NID" value={profile.NID} onChange={changeUpdateProfile} placeholder="NID Number" className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                                </div>
                                <div className="input">
                                    <div className="label mb-2">
                                        <label htmlFor="">Role</label>
                                    </div>
                                    <input id="" type="text" name="role" value={profile.role} onChange={changeUpdateProfile} placeholder="Role" className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                                </div>
                                <div className="input">
                                    <div className="label mb-2">
                                        <label htmlFor="">Employee Status</label>
                                    </div>
                                    <input id="" type="text" name="employee_status" value={profile.employee_status} onChange={changeUpdateProfile} placeholder="Employee Status"   className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                                </div>
                                <div className="input">
                                    <div className="label mb-2">
                                        <label htmlFor="">Salary</label>
                                    </div>
                                    <input id="" type="tenumberxt" name="salary" value={profile.salary} onChange={changeUpdateProfile} placeholder="Salary"   className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                                </div>
                                <div className="input">
                                    <div className="label mb-2">
                                        <label htmlFor="">Joining Date</label>
                                    </div>
                                    <input id="" type="date" name="joining_date" value={profile.joining_date} onChange={changeUpdateProfile} className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                                </div>
                                <div className="input">
                                    <div className="label mb-2">
                                        <label htmlFor="">Permanent Address</label>
                                    </div>
                                    <input id="" type="text" name="permanent_address" value={profile.permanent_address} onChange={changeUpdateProfile} placeholder="Parmanent Address"   className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                                </div>
                                <div className="input">
                                    <div className="label mb-2">
                                        <label htmlFor="">Present Address</label>
                                    </div>
                                    <input id="" type="text" name="present_address" value={profile.present_address} onChange={changeUpdateProfile} placeholder="Present Address"   className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                                </div>
                            </div>
                            <div className="flex justify-end pt-[50px]">
                                <div className="button text-center py-[10px] px-[40px] rounded-[5px] bg-primary text-secondary-1 font-medium text-[20px]">
                                    <button>Update Profile</button>
                                </div>
                            </div>
                        </form>
                    </div>
                }
            </Wrapper>
        </Layout>
    )
}
export default Profile