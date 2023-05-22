import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"

const Layout = ({children})=>{
    return(
        <div className="flex w-full">
            <Sidebar/>
            <div className="grow w-[85%]">
                <Header/>
                    <main className="w-full h-[87%]">{children}</main>
                <Footer/>
            </div>
        </div>
       
    )
}
export default Layout