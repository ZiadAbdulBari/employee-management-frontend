import { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import Layout from "../../components/layouts/Layout";
import axiosInstance from "../../healpers/axios.config";
import {getSettings} from '../../healpers/api'
const EmployeeList = ()=>{
    const [employees, setEmployees] = useState([]);
    const [openFilter, setOpenFilter] = useState(false);
    const [role,setRole] = useState([]);
    const [selectedRole,setSelectedRole]=useState([]);
    const getAllEmployee = ()=>{
        const URL = "/employee/list-employee/";
        const token = JSON.parse(window.localStorage.getItem('token'));
        axiosInstance.get(URL,{headers:{Authorization:token}})
        .then((response)=>{
            setEmployees(response.data.employeeList);
        })

    }
    const handleFilterPanel = ()=>{
        const panelSelector = document.getElementById('filter-options');
        if(!openFilter){
            panelSelector.classList.remove('hidden');
            setOpenFilter(true);
        }
        else{
            panelSelector.classList.add('hidden');
            setOpenFilter(false);
        }
    }
    const loadAllRole = ()=>{
        getSettings()
        .then(res=>{
            setRole(res.data.settingData[0].role)
        }) 
    }
    const employeeFilter = (type,value)=>{
        if(type=='role'){
            const alreadyExist = selectedRole.indexOf(value);
            if(alreadyExist==-1){
                setSelectedRole([value,...selectedRole]);
            }
            else{
                selectedRole.splice(alreadyExist,1);
                setSelectedRole([...selectedRole]);
            }
        }
        // const token = JSON.parse(window.localStorage.getItem('token'));
        // const URL = `/employee/filter/?role=${selectedRole.join(',')}`;
        // axiosInstance.get(URL,{headers:{Authorization:token}})
        // .then(response=>{
        //     console.log(response);
        // })
        
    }
    const getFilteredData = ()=>{
        const allRole = selectedRole.join(',');
        const token = JSON.parse(window.localStorage.getItem('token'));
        const URL = `/employee/filter/?role=${allRole}`;
        axiosInstance.get(URL,{headers:{Authorization:token}})
        .then(response=>{
            console.log(response);
            setEmployees(response.data.filteredData);
        })
    }
    useEffect(()=>{
        getAllEmployee();
        loadAllRole()
    },[]);
    useEffect(()=>{
        if(selectedRole.length>0){
            getFilteredData();
        }else{
            getAllEmployee();
        }
    },[selectedRole]);
    return(
        <Layout>
            <Wrapper>
                <div className="w-full h-[50px] relative">
                    <div className="absolute top-0 right-0 z-40 bg-secondary-1 cursor-pointer" onClick={handleFilterPanel}>
                        <div className="p-[10px]">
                            <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25">
                                <path d="M10 14L4 5V3H20V5L14 14V20L10 22V14Z" fill="rgba(11,36,71,1)"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="bg-secondary-2 h-[300px] w-[400px] absolute top-[45px] right-0 z-30 hidden" id="filter-options">
                        <div className="flex p-4">
                            <div>
                                {
                                    role.length>0 && role.map((possition,index)=>{
                                        return(
                                            <div key={index}>
                                                <input className="mr-4 w-[15px] h-[15px]" value={possition} type="checkbox" id={possition} onChange={()=>employeeFilter('role',possition)}/>
                                                <label htmlFor={possition}>{possition}</label>
                                            </div>
                                        )
                                    })
                                    
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
                <table className="w-full table-fixed border-collapse">
                    <thead>
                        <tr className="bg-secondary-2 !h-[40px]">
                            <th className="w-[20%] px-[5px] py-[5px] border-secondary-2">Employee Name</th>
                            <th className="w-[35%] px-[5px] py-[5px] border-secondary-2">Email</th>
                            <th className="w-[15%] px-[5px] py-[5px] border-secondary-2">Role</th>
                            <th className="w-[10%] px-[5px] py-[5px] border-secondary-2">Salary</th>
                            <th className="w-[10%] px-[5px] py-[5px] border-secondary-2">Joining Date</th>
                            <th className="w-[10%] px-[5px] py-[5px] border-secondary-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.length>0 ? employees.map((employee,index)=>{
                                return(
                                    <tr key={index}>
                                        <td className="px-[20px] py-[20px] border border-slate-300">{employee.first_name} {employee.last_name}</td>
                                        <td className="px-[20px] py-[20px] border border-slate-300">{employee.email}</td>
                                        <td className="px-[20px] py-[20px] border border-slate-300">{employee.role}</td>
                                        <td className="px-[20px] py-[20px] border border-slate-300">{employee.salary}</td>
                                        <td className="px-[20px] py-[20px] border border-slate-300">{new Date(employee.joining_date).toLocaleDateString()=='Invalid Date'?'---':new Date(employee.joining_date).toLocaleDateString()}</td>
                                        <td className="px-[20px] py-[20px] border border-slate-300" >
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                    <path d="M22 13.3414C21.3744 13.1203 20.7013 13 20 13C16.6863 13 14 15.6863 14 19C14 19.7013 14.1203 20.3744 14.3414 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V13.3414ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829ZM21 18H24V20H21V23H19V20H16V18H19V15H21V18Z" fill="rgba(11,36,71,1)"></path>
                                                </svg>
                                            </span>
                                        </td>
                                    </tr>
                                )
                            })
                            :<tr><td className="text-center">No Data</td></tr>
                        }
                    </tbody>
                </table>
            </Wrapper>
        </Layout>
    )
}
export default EmployeeList;