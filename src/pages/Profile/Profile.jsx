import { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import Layout from "../../components/layouts/Layout";
import axiosInstance from "../../healpers/axios.config";
import toastMessage from "../../healpers/toast"
const Profile = ()=>{
    const [profile,setProfile] = useState({});
    const [updateStatus,setUpdateStatus] = useState(false);
    const getProfileData = ()=>{
        const URL = '/employee/load-profile/';
        const token = JSON.parse(window.localStorage.getItem('token'));
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
        const token = JSON.parse(window.localStorage.getItem('token'));
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
                        <div className="flex justify-between mb-8">
                            <p className="text-primary text-[25px]">Profile</p>
                            <div className="cursor-pointer" onClick={openUpdateForm}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M16.7574 2.99666L9.29145 10.4626L9.29886 14.7097L13.537 14.7023L21 7.2393V19.9967C21 20.5489 20.5523 20.9967 20 20.9967H4C3.44772 20.9967 3 20.5489 3 19.9967V3.99666C3 3.44438 3.44772 2.99666 4 2.99666H16.7574ZM20.4853 2.09717L21.8995 3.51138L12.7071 12.7038L11.2954 12.7062L11.2929 11.2896L20.4853 2.09717Z" fill="rgba(11,36,71,1)"/>
                                </svg>
                            </div>
                        </div>
                        <div className="grid grid-flow-row grid-cols-2 gap-8 w-full">
                            <div>
                                <p className="font-bold mb-2 text-primary text-[18px]">First Name</p>
                                <p className="text-[18px]">{profile.first_name}</p>
                            </div>
                            <div>
                                <p className="font-bold mb-2 text-primary text-[18px]">Last Name</p>
                                <p className="text-[18px]">{profile.last_name}</p>
                            </div>
                            <div>
                                <p className="font-bold mb-2 text-primary text-[18px]">Contact Number</p>
                                <p className="text-[18px]">{profile.contact_number}</p>
                            </div>
                            <div>
                                <p className="font-bold mb-2 text-primary text-[18px]">Emargency Contact Number</p>
                                <p className="text-[18px]">{profile.emargency_contact_number}</p>
                            </div>
                            <div>
                                <p className="font-bold mb-2 text-primary text-[18px]">Official Email Address</p>
                                <p className="text-[18px]">{profile.official_email}</p>
                            </div>
                            <div>
                                <p className="font-bold mb-2 text-primary text-[18px]">Personal Email Address</p>
                                <p className="text-[18px]">{profile.personal_email}</p>
                            </div>
                            <div>
                                <p className="font-bold mb-2 text-primary text-[18px]">Personal Email Address</p>
                                <p className="text-[18px]">{profile.personal_email}</p>
                            </div>
                            <div>
                                <p className="font-bold mb-2 text-primary text-[18px]">NID Number</p>
                                <p className="text-[18px]">{profile.NID}</p>
                            </div>
                            <div>
                                <p className="font-bold mb-2 text-primary text-[18px]">Date of Birth</p>
                                <p className="text-[18px]">{new Date(profile.dob).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <p className="font-bold mb-2 text-primary text-[18px]">Permanent Address</p>
                                <p className="text-[18px]">{profile.permanent_address}</p>
                            </div>
                            <div>
                                <p className="font-bold mb-2 text-primary text-[18px]">Present Address</p>
                                <p className="text-[18px]">{profile.present_address}</p>
                            </div>
                            <div>
                                <p className="font-bold mb-2 text-primary text-[18px]">Joining Date</p>
                                <p className="text-[18px]">{new Date(profile.joining_date).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <p className="font-bold mb-2 text-primary text-[18px]">Role</p>
                                <p className="text-[18px]">{profile.role}</p>
                            </div>
                            <div>
                                <p className="font-bold mb-2 text-primary text-[18px]">Salary</p>
                                <p className="text-[18px]">{profile.salary}</p>
                            </div>
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
                                        <label htmlFor="">Official Email Address</label>
                                    </div>
                                    <input id="" type="email" name="official_email" value={profile.official_email} onChange={changeUpdateProfile} placeholder="Official Email"   className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                                </div>
                                <div className="input">
                                    <div className="label mb-2">
                                        <label htmlFor="">Personal Email Address</label>
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
                                        <label htmlFor="">Date of Birth</label>
                                    </div>
                                    <input id="" type="date" name="dob" value={profile.dob} onChange={changeUpdateProfile} placeholder="NID Number" className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
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