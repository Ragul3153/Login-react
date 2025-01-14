import { useNavigate } from 'react-router-dom';

function Fail(){

    const navigate = useNavigate()

    const handlesignup = () => {
    navigate("/Signup")
    }

    return(
        <div className="bg-wallpaper bg-cover h-screen flex justify-center items-center ">
        <div className="bg-transparent flex flex-col items-center justify-center gap-5 p-10 border rounded-xl border-transparent backdrop-blur-lg">
            <div className="text-3xl font-bold">
            <h1>Welcome !!!</h1>
        </div>
        <div className="flex flex-col">  
            <input className='border border-black rounded p-2 w-64 focus:outline-none' name="username" placeholder="Username"></input> <br/>
            <input className='border border-black rounded p-2 w-64 focus:outline-none' name="password" placeholder="Password"></input> <br/>
            <h1 className="font-bold text-center text-2xl">Login Failed</h1>
        </div> 
        <div className="flex gap-3 font-bold">
            <p>Do you haven't account?</p> 
            <button className="hover:underline cursor-pointer hover:text-blue-800" onClick={handlesignup}>Register</button>
        </div>
        </div>  
    </div>
    )

}

export default Fail