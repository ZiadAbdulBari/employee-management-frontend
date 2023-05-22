import axios from "axios";
const baseURL = 'http://localhost:8000/api/';
let headers  ={};
// if(localStorate.token){
// }
headers.Authorizations = `Bearer ${localStorage.token}`
const axiosInstance = axios.create({
    baseURL:baseURL,
    headers:headers
});
export default axiosInstance;