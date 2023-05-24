import { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import Layout from "../components/layouts/Layout";
import axiosInstance from "../healpers/axios.config";

const EmployeeList = ()=>{
    const [employees,setEmployees] = useState([]);
    const getAllEmployee = ()=>{
        const URL = "/employee/list-employee/";
        const token = window.localStorage.getItem('token');
        axiosInstance.get(URL,{headers:{Authorization:token}})
        .then((response)=>{
            setEmployees(response.data.employeeList);
        })

    }
    useEffect(()=>{
        getAllEmployee();
    },[]);
    return(
        <Layout>
            <Wrapper>
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
                                        <td className="px-[20px] py-[20px] border border-slate-300">00/00/00</td>
                                        <td className="px-[20px] py-[20px] border border-slate-300" >Send mail</td>
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