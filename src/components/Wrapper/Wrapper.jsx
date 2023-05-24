const Wrapper = ({children})=>{
    return(
        <div className="flex w-full h-full justify-center items-center">
            <div className="wrapper-shadow w-[90%] h-[90%] rounded-[5px]">
                <div className="w-full p-[50px]">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Wrapper;