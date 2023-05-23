import { useEffect, useState } from "react"
import Wrapper from "../components/Wrapper/Wrapper"
import Layout from "../components/layouts/Layout"
import axiosInstance from "../healpers/axios.config"
import toastMessage from "../healpers/toast"
const Todo = ()=>{
    const [todoData,setTodoData]=useState({
        title:"",
        description:"",
        assign_to:"",
        project_name:"",
        issue_date:""
    })
    const [employees,setEmployees] = useState([]);
    useEffect(()=>{
        let URL = '/employee/list-employee/';
        axiosInstance.get(URL)
        .then((response)=>{
            setEmployees(response.data.employeeList)
        })
    },[]);
    const changeInputValue = (e)=>{
        setTodoData({
            ...todoData,
            [e.target.name]:e.target.value,
        })
    }
    const handleTodoForm = (e)=>{
        e.preventDefault();
        const URL = "/todo/create-todo/";
        axiosInstance.post(URL,todoData)
        .then(response=>{
            toastMessage(response.data.message,'s');
            setTodoData({
                title:"",
                description:"",
                assign_to:"",
                project_name:"",
                issue_date:""
            })
        })
    }
    return(
        <Layout>
            <Wrapper>
                <form onSubmit={handleTodoForm}>
                    <div className="grid grid-flow-row grid-cols-2 gap-8 w-full">
                        <div className="input">
                            <div className="label mb-2">
                                <label htmlFor="">Title</label>
                            </div>
                            <input id="" type="text" name="title" placeholder="Title" value={todoData.title} onChange={changeInputValue} className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                        </div>
                        <div className="input">
                            <div className="label mb-2">
                                <label htmlFor="">Description</label>
                            </div>
                            <input type="text" name="description" placeholder="Description" value={todoData.description} onChange={changeInputValue} className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                        </div>
                        <div className="input">
                            <div className="label mb-2">
                                <label htmlFor="">Assign to</label>
                            </div>
                            <select type="text" name="assign_to" placeholder="Assign to" value={todoData.assign_to} onChange={changeInputValue} className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]">
                                {
                                    employees.length>0 ? employees.map((employee,i)=>{
                                        return(
                                            <option value={employee.employee_id} key={i}>{employee.first_name}</option>
                                        )
                                    }):<option value="">Employee list is empty</option>
                                }
                            </select>
                        </div>
                        <div className="input">
                            <div className="label mb-2">
                                <label htmlFor="">Project name</label>
                            </div>
                            <input type="text" name="project_name" placeholder="Project name" value={todoData.project_name} onChange={changeInputValue} className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                        </div>
                        <div className="input">
                            <div className="label mb-2">
                                <label htmlFor="">Issue date</label>
                            </div>
                            <input type="date" name="issue_date" placeholder="Issue date" value={todoData.issue_date} onChange={changeInputValue} className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                        </div>
                    </div>
                    <div className="flex justify-end pt-[50px]">
                        <div className="button text-center py-[10px] px-[40px] rounded-[5px] bg-primary text-secondary-1 font-medium text-[20px]">
                            <button>Create Todo</button>
                        </div>
                    </div>
                </form>
            </Wrapper>
        </Layout>
    )
}
export default Todo