import Wrapper from "../components/Wrapper/Wrapper";
import Layout from "../components/layouts/Layout";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useState } from "react";
import axiosInstance from "../healpers/axios.config";
const Dashboard=()=> {
  //https://fullcalendar.io/docs#toc
  const [attendance,setAttendance] = useState([]);
  const signon = ()=>{
    const time = new Date();
    const attendanceTime = {
      time:time
    };
    const token = window.localStorage.getItem('token');
    const URL = "/employee/signon/";
    axiosInstance.post(URL,attendanceTime,{headers:{Authorization:token}})
    .then((response)=>{
      console.log(response);
    })
  }
  const signoff = ()=>{
    const time = new Date();
    const attendanceTime = {
      time:time
    };
    const token = window.localStorage.getItem('token');
    const URL = "/employee/signoff/";
    axiosInstance.post(URL,attendanceTime,{headers:{Authorization:token}})
    .then((response)=>{
      console.log(response);
    })
  }
  const getCalendarData= async(dateInfo)=> {
    const timeInfo = new Date(dateInfo.view.title)
    const month = timeInfo.getMonth()+1;
    const year = timeInfo.getFullYear();
    const data = {
      month:month,
      year:year,
    }
    getHistory(data)
  }
  const getHistory = (date)=>{
    const token = window.localStorage.getItem('token');
    let URL = '/employee/attendance-history/';
    axiosInstance.post(URL,date,{headers:{Authorization:token}})
    .then(response=>{
      const allHistory=[];
      response.data.getAttendance.forEach(attend=>{
        const formetDate = new Date(attend.date).toISOString();
        const date = formetDate.substring(0, 10);
        const dailyHistory={
          title : 'Attend',
          start  : ''
        }
        dailyHistory.start= date;
        allHistory.push(dailyHistory);
      })
      setAttendance(allHistory);
      
    })
  }
  return (
    <Layout>
        <Wrapper>
          <div className="dashboard-top flex justify-between items-center">
            <div className="h-[180px] w-[150px] bg-primary rounded-[8px]"></div>
            <div>Hello Ziad! Hope your day will be good and productive</div>
            <div className="px-6 py-2 bg-primary text-secondary-1 rounded-[8px]" onClick={signon}>Signon</div>
            <div className="px-6 py-2 bg-primary text-secondary-1 rounded-[8px]" onClick={signoff}>Signoff</div>
          </div>
          <div className="flex gap-8 mt-[50px]">
            <div>Calender</div>
            <div>Working time</div>
          </div>
          <div className="mt-[80px]">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView='dayGridMonth'
            weekends={true}
            dayHeaders={true}
            height={650}
            eventSources={[
              {
                events: attendance,
                className:"event-shape"
              }
            ]}
            datesSet={getCalendarData}
          />
          </div>
        </Wrapper>
    </Layout>
  )
}
export default Dashboard;
