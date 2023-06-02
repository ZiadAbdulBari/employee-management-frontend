import Wrapper from "../../components/Wrapper/Wrapper";
import Layout from "../../components/layouts/Layout";
import { useState,useEffect } from "react";
import axiosInstance from "../../healpers/axios.config";

const TodoList = ()=>{
    const [todos,setTodos] = useState([]);

    const getTodos = ()=>{
        const URL='/todo/list-todo/';
        const token = window.localStorage.getItem('token');
        axiosInstance.get(URL,{ headers: { Authorization:token}})
        .then((response)=>{
            setTodos(response.data.all_task);
        })
    }
    const changeProgress = (id)=>{
        const timeDate = new Date();
        const token = window.localStorage.getItem('token');
        let data = {
            time:timeDate
        }
        const URL=`/todo/update-todo/${id}`;
        axiosInstance.post(URL,data,{ headers: { Authorization:token}})
        .then(response=>{
            console.log(response);
            getTodos();
        })
    }
    useEffect(()=>{
        getTodos();
    },[]);
    return(
        <Layout>
            <Wrapper>
                <table className="w-full table-fixed border-collapse">
                    <thead>
                        <tr className="bg-secondary-2 !h-[40px]">
                            <th className="w-[15%] px-[5px] py-[5px] border-secondary-2">Title</th>
                            <th className="w-[40%] px-[5px] py-[5px] border-secondary-2">Description</th>
                            <th className="w-[15%] px-[5px] py-[5px] border-secondary-2">Project</th>
                            <th className="w-[10%] px-[5px] py-[5px] border-secondary-2">Issue Date</th>
                            <th className="w-[10%] px-[5px] py-[5px] border-secondary-2">Work Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.length>0 ? todos.map((todo,index)=>{
                                return(
                                    <tr key={index}>
                                        <td className="px-[20px] py-[20px] border border-slate-300">{todo.title}</td>
                                        <td className="px-[20px] py-[20px] border border-slate-300" dangerouslySetInnerHTML={{ __html: todo.description }}/>
                                        <td className="px-[20px] py-[20px] border border-slate-300">{todo.project_name}</td>
                                        <td className="px-[20px] py-[20px] border border-slate-300">{todo.issue_date}</td>
                                        <td className="px-[20px] py-[20px] border border-slate-300" onClick={()=>changeProgress(todo._id)}>
                                            <button className={`border-l-[1px] border-t-[1px] border-b-[1px] border-primary px-2 py-1 ${todo.start_time && !todo.finish_time ?'bg-primary text-secondary-1':''}`}>Start</button>
                                            <button className={`border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] border-primary px-2 py-1 ${todo.start_time && todo.finish_time?'bg-primary text-secondary-1':''}`}>Finish</button>
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
export default TodoList;