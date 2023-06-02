import axiosInstance from "./axios.config";

export const getSettings = async ()=>{
    const URL = "/settings/get-settings/";
    const token = JSON.parse(window.localStorage.getItem('token'));

    const response = await axiosInstance.get(URL,{headers:{Authorization:token}})
    return response;
}
