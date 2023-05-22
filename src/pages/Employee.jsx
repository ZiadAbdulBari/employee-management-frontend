import { useState } from "react"
import Layout from "../components/layouts/Layout"
import axiosInstance from "../healpers/axios.config"
const Employee=()=> {
  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    salary:"",
    role:""
  })
  const changeInputValue = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  const handleInvitationForm = (e)=>{
    e.preventDefault();
    const URL = 'employee/add-employee/';
    axiosInstance.post(URL,formData)
    .then(response=>{
      console.log(response);
    })
  }
  return (
    <Layout>
      <div className="flex w-full h-full justify-center items-center">
        <div className="wrapper-shadow flex justify-center items-center w-[90%] h-[90%] rounded-[5px]">
          <div className="w-full p-[50px]">
            <form onSubmit={handleInvitationForm}>
              <div className="grid grid-flow-row grid-cols-2 gap-8 w-full">
                <div className="input">
                  <div className="label mb-2">
                      <label htmlFor="">First Name</label>
                  </div>
                  <input id="" type="text" name="firstName" placeholder="First Name" value={formData.name} onChange={changeInputValue} className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                </div>
                <div className="input">
                  <div className="label mb-2">
                      <label htmlFor="">Last Name</label>
                  </div>
                  <input type="text" name="lastName" placeholder="Last Name" value={formData.name} onChange={changeInputValue} className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                </div>
                <div className="input">
                  <div className="label mb-2">
                      <label htmlFor="">Email</label>
                  </div>
                  <input type="email" name="email" placeholder="Email" value={formData.name} onChange={changeInputValue} className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                </div>
                <div className="input">
                  <div className="label mb-2">
                      <label htmlFor="">Role</label>
                  </div>
                  <input type="text" name="role" placeholder="Role" value={formData.name} onChange={changeInputValue} className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                </div>
                <div className="input">
                  <div className="label mb-2">
                      <label htmlFor="">Salary</label>
                  </div>
                  <input type="number" name="salary" placeholder="Salary" value={formData.name} onChange={changeInputValue} className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
                </div>
              </div>
              <div className="flex justify-end pt-[50px]">
                <div className="button text-center py-[10px] px-[40px] rounded-[5px] bg-primary text-secondary-1 font-medium text-[20px]">
                  <button>Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Employee;