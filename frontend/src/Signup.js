import { use, useState } from "react"
import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Signup(){

    const navigate = useNavigate()
    const [sname,setsname] = useState("")
    const [spword,setspword] = useState("")
    const [scpword,setscpword] = useState("")

    const handlelogin = () => {
        navigate("/")
    }

    const  getuname = (event) => {
        setsname(event.target.value)
    }

    const  getpword = (event) => {
        setspword(event.target.value)
    }

    const  getcpword = (event) => {
        setscpword(event.target.value)
    }

    const addsignup = () => {
        var Signupdetails = axios.post("https://login-react-backend.onrender.com/signup",{"username":sname,"password":spword,"confirmpassword":scpword})
        alert("register successfull")   
        navigate('/')
        
   }

    return(
    <div className="bg-wallpaper bg-cover h-screen flex justify-center items-center ">
        <div className="bg-transparent flex flex-col items-center justify-center gap-5 p-10 border rounded-xl border-transparent backdrop-blur-lg">
            <div className="text-3xl font-bold">
            <h1>Welcome !!!</h1>
        </div>
        <div className="flex flex-col">  
            <input onChange={getuname} className='border border-black rounded p-2 w-64 focus:outline-none' name="username" placeholder="Username"></input> <br/>
            <input onChange={getpword} className='border border-black rounded p-2 w-64 focus:outline-none' name="password" placeholder="Password"></input> <br/>
            <input onChange={getcpword} className='border border-black rounded p-2 w-64 focus:outline-none' name="Confirm Password" placeholder="Confirm Password"></input> <br/>
            <button className="bg-blue-600 font-bold text-white p-2 border rounded-lg hover:bg-green-600" onClick={addsignup}>Signup</button>
        </div> 
        <div className="flex gap-3 font-bold">
            <p>Already have an account?</p> 
            <button className="hover:underline cursor-pointer hover:text-blue-800" onClick={handlelogin}>Login</button>
        </div>
        </div>  
    </div>
    )
}

export default  Signup