import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"

const Layout = ({children})=>{
    return(
        <div className="flex w-full h-screen relative">
            <div className="w-[15%] h-screen fixed top-0 left-0">
                <Sidebar/>
            </div>
            <div className="grow w-[85%] min-h-[98%] absolute top-0 right-0">
                <Header/>
                    <main className="w-full h-[87%]">{children}</main>
                <Footer/>
            </div>
        </div>
       
    )
}
export default Layout