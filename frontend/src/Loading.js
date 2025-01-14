import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Loading(){

const navigate = useNavigate()
const [uname,setuname] = useState("")
const [pword,setpword] = useState("")

const handleuname = (event) => {
  setuname(event.target.value)
}

const handlepword = (event) => {
  setpword(event.target.value)
}

const check = () => {
  var logindetails = axios.post("http://localhost:5000/login",{"username":uname,"password":pword})
  console.log(logindetails);
  
  logindetails.then(function(data){
    if(data.data === true)
    {
      navigate("/success")
    }
    else{
      navigate("/fail")
    }
  })
}

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
            <input onChange={handleuname} className='border border-black rounded p-2 w-64 focus:outline-none' name="username" placeholder="Username"></input> <br/>
            <input onChange={handlepword} className='border border-black rounded p-2 w-64 focus:outline-none' name="password" placeholder="Password"></input> <br/>
            <button onClick={check} className="bg-blue-600 font-bold text-white p-2 border rounded-lg hover:bg-green-600">Login</button>
        </div> 
        <div className="flex gap-3 font-bold">
            <p>Do you haven't account?</p> 
            <button className="hover:underline cursor-pointer hover:text-blue-800" onClick={handlesignup}>Register</button>
        </div>
        </div>
        
    </div>
)

}

export default Loading