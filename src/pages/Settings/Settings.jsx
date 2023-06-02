import { useEffect, useState } from "react"
import Wrapper from "../../components/Wrapper/Wrapper"
import Layout from "../../components/layouts/Layout"
import axiosInstance from "../../healpers/axios.config";
import toastMessage from "../../healpers/toast";
import {getSettings} from '../../healpers/api'
const Setting = ()=>{
    const [role,setRole] = useState([]);
    const [projects,setProjects] = useState([]);
    const [status,setStatus] = useState([]);
    const [newProject,setNewProject] = useState('');
    const [newRole,setNewRole] = useState('');
    const [newStatus,setNewStatus] = useState('');
    const getAllSettings = ()=>{
        getSettings()
        .then(response=>{
            setRole(response.data.settingData[0].role);
            setProjects(response.data.settingData[0].project);
            setStatus(response.data.settingData[0].employee_status);
        })
    }
    const handleProjectAddField = (e)=>{
        setNewProject(e.target.value);
    }
    const handleProjectAdd = ()=>{
        const URL = "/settings/add-project/";
        const token = window.localStorage.getItem('token');
        let data={
            newProject:newProject
        }
        axiosInstance.post(URL,data,{headers:{Authorization:token}})
        .then(response=>{
            toastMessage(response.data.message,'s');
            setNewProject('');
            getAllSettings();
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const handleRoleAddField = (e)=>{
        setNewRole(e.target.value);
    }
    const handleRoleAdd = ()=>{
        const URL = "/settings/add-role/";
        const token = JSON.parse(window.localStorage.getItem('token'));
        let data={
            newRole:newRole
        }
        axiosInstance.post(URL,data,{headers:{Authorization:token}})
        .then(response=>{
            toastMessage(response.data.message,'s');
            setNewRole('');
            getAllSettings();
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const handleStatusAddField = (e)=>{
        setNewStatus(e.target.value);
    }
    const handleStatusAdd = ()=>{
        const URL = "/settings/add-employee-status/";
        const token = window.localStorage.getItem('token');
        let data={
            newStatus:newStatus
        }
        axiosInstance.post(URL,data,{headers:{Authorization:token}})
        .then(response=>{
            toastMessage(response.data.message,'s');
            setNewStatus('');
            getAllSettings();
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const deleteRole = (possition)=>{
        const URL = "/settings/delete-role/";
        const token = window.localStorage.getItem('token');
        let data={
            role:possition
        }
        axiosInstance.post(URL,data,{headers:{Authorization:token}})
        .then(response=>{
            toastMessage(response.data.message,'s');
            setNewStatus('');
            getAllSettings();
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const deleteProject = (project)=>{
        const URL = "/settings/delete-project/";
        const token = window.localStorage.getItem('token');
        let data={
            project:project
        }
        axiosInstance.post(URL,data,{headers:{Authorization:token}})
        .then(response=>{
            toastMessage(response.data.message,'s');
            setNewStatus('');
            getAllSettings();
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const deleteEmployeeStatus = (type)=>{
        const URL = "/settings/delete-employee-status/";
        const token = JSON.parse(window.localStorage.getItem('token'));
        let data={
            employeeStatus:type
        }
        axiosInstance.post(URL,data,{headers:{Authorization:token}})
        .then(response=>{
            toastMessage(response.data.message,'s');
            setNewStatus('');
            getAllSettings();
        })
        .catch(error=>{
            console.log(error);
        })
    }
    useEffect(()=>{
        getAllSettings();
    },[]);
    return(
        <Layout>
            <Wrapper>
                {/* add project and show it */}
                <div className="project w-full flex gap-8 justify-between">
                    <div className="project-filed w-[30%]">
                        <div className="input">
                            <div className="label mb-2">
                                <label htmlFor="">Project Name</label>
                            </div>
                            <div className="flex gap-4">
                                <input id="" type="text" name="newProject" value={newProject} onChange={handleProjectAddField} placeholder="Project Name" className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]"/>
                                <button className="bg-primary text-secondary-1 px-6 rounded-[8px]" onClick={handleProjectAdd}>Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="project-list w-[70%]">
                        <div className="grid grid-rows-4 grid-cols-4 grid-flow-col gap-6">
                            {
                                projects.length>0 ? projects.map((project,index)=>{
                                    return(
                                        <div className="flex justify-between items-center" key={index}>
                                            <p>{project}</p>
                                            <span className="cursor-pointer" onClick={()=>deleteProject(project)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                                    <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="rgba(217,21,21,1)"></path>
                                                </svg>    
                                            </span>
                                        </div>
                                    )
                                })
                                :<p>No project is running</p>
                            }
                        </div>
                    </div>
                </div>
                {/* add role and show it */}
                <div className="devider w-full bg-secondary-2 h-[2px] my-[50px]"></div>

                <div className="role w-full flex gap-8 justify-between">
                    <div className="role-filed w-[30%]">
                        <div className="input">
                            <div className="label mb-2">
                                <label htmlFor="">Role</label>
                            </div>
                            <div className="flex gap-4">
                                <input id="" type="text" name="newRole" value={newRole} onChange={handleRoleAddField} placeholder="Add Role" className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]"/>
                                <button className="bg-primary text-secondary-1 px-6 rounded-[8px]" onClick={handleRoleAdd}>Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="role-list w-[70%]">
                        <div className="grid grid-rows-4 grid-cols-4 grid-flow-col gap-6">
                            {
                                role.length>0 ? role.map((position,index)=>{
                                    return(
                                        <div className="flex justify-between items-center" key={index}>
                                            <p>{position}</p>
                                            <span className="cursor-pointer" onClick={()=>deleteRole(position)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                                    <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="rgba(217,21,21,1)"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    )
                                })
                                :<p>No Role</p>
                            }
                        </div>
                    </div>
                </div>

                <div className="devider w-full bg-secondary-2 h-[2px] my-[50px]"></div>

                <div className="status w-full flex gap-8 justify-between">
                    <div className="status-filed w-[30%]">
                        <div className="input">
                            <div className="label mb-2">
                                <label htmlFor="">Employee Status</label>
                            </div>
                            <div className="flex gap-4">
                                <input id="" type="text" name="newStatus" value={newStatus} onChange={handleStatusAddField} placeholder="Employee Status" className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]"/>
                                <button className="bg-primary text-secondary-1 px-6 rounded-[8px]" onClick={handleStatusAdd}>Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="status-list w-[70%]">
                        <div className="grid grid-rows-4 grid-cols-4 grid-flow-col gap-6">
                            {
                                status.length>0 ? status.map((type,index)=>{
                                    return(
                                        <div className="flex justify-between items-center" key={index}>
                                            <p>{type}</p>
                                            <span className="cursor-pointer" onClick={()=>deleteEmployeeStatus(type)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                                <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="rgba(217,21,21,1)"></path>
                                            </svg>
                                            </span>
                                        </div>
                                    )
                                })
                                :<p>No Employee Status</p>
                            }
                        </div>
                    </div>
                </div>

                {/* <div className="devider w-full bg-secondary-2 h-[2px] my-[50px]"></div>

                <div className="status w-full ">
                    <div className="status-list w-full grid grid-rows-4 grid-cols-2 grid-flow-col gap-y-4">
                        <div>
                            <input className="mr-4 w-[15px] h-[15px]" value="Sunday" type="checkbox" id="sun" onChange={handleHoliday}/>
                            <label htmlFor="sun">Sunday</label>
                        </div>
                        <div>
                            <input className="mr-4 w-[15px] h-[15px]" value="day" type="checkbox" id="mon" />
                            <label htmlFor="mon">Monday</label>
                        </div>
                        <div>
                            <input className="mr-4 w-[15px] h-[15px]" value="day" type="checkbox" id="tues" />
                            <label htmlFor="tues">Tuesday</label>
                        </div>
                        <div>
                            <input className="mr-4 w-[15px] h-[15px]" value="day" type="checkbox" id="wednes" />
                            <label htmlFor="wednes">Wednesday</label>
                        </div>
                        <div>
                            <input className="mr-4 w-[15px] h-[15px]" value="day" type="checkbox" id="thurs" />
                            <label htmlFor="thurs">Thursday</label>
                        </div>
                        <div>
                            <input className="mr-4 w-[15px] h-[15px]" value="day" type="checkbox" id="fri" />
                            <label htmlFor="fri">Friday</label>
                        </div>
                        <div>
                            <input className="mr-4 w-[15px] h-[15px]" value="day" type="checkbox" id="satur" />
                            <label htmlFor="satur">Saturday</label>
                        </div>
                    </div>
                </div> */}

            </Wrapper>
        </Layout>
    )
}
export default Setting