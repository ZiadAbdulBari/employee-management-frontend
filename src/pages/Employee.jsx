import { useState } from "react"
import toastMessage from "../healpers/toast"
import Layout from "../components/layouts/Layout"
import axiosInstance from "../healpers/axios.config"
import Wrapper from "../components/Wrapper/Wrapper"
const Employee=()=> {
  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    salary:"",
    role:"",
    joiningDate:""
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
      toastMessage(response.data.message,'s');
      setFormData({
        firstName:"",
        lastName:"",
        email:"",
        salary:"",
        role:"",
        joiningDate:"",
      })
    })
  }
  return (
    <Layout>
      <Wrapper>
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
            <div className="input">
              <div className="label mb-2">
                <label htmlFor="">Joining Date</label>
              </div>
              <input type="date" name="joiningDate" value={formData.joiningDate} onChange={changeInputValue} className="px-[10px] py-[10px] rounded-[8px] border border-gray-300 !outline-none h-[50px] w-[100%]" />
            </div>
          </div>
          <div className="flex justify-end pt-[50px]">
            <div className="button text-center py-[10px] px-[40px] rounded-[5px] bg-primary text-secondary-1 font-medium text-[20px]">
              <button>Save</button>
            </div>
          </div>
        </form>
      </Wrapper>
    </Layout>
  )
}
export default Employee;