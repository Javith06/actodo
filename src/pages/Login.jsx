import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

 
function Login(props)
{
    const navigate = useNavigate()
    const [Eusername,setEusername]=useState()
    const[Epassword,setEpassword]=useState()
    const[Ruser,setRuser]=useState(true)

    const users=props.users
   

   
   
    function handleUInput(evt)
    {
        setEusername(evt.target.value)
    }

    function handlePInput(evt)
    {
        setEpassword(evt.target.value)
    }



    function checkUser()
    {

        var userfound= false

        users.forEach(function(item)
    {
        if(item.username===Eusername && item.password === Epassword)
        {
            console.log("Login Successful");
            userfound=true
            navigate("/landing",{state:{user:Eusername}})
        }
        
    })

    if(userfound===false)
    {
        console.log("Login Failed");
        setRuser(false)
    }

    }



    return(

        <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1>Hey Hi👋</h1>
            {Ruser? <p>I help you manage your activities after you Login :)</p>: <p className="text-red-500">Please Signup before Login!!</p> }

            <div className="flex flex-col gap-2 my-2">
            <input type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Username"
            onChange={handleUInput}/>
            

            <input type="password"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Password"
            onChange={handlePInput}/>

           
            <button className="bg-[#8272DA] w-24 p-1 rounded-md"onClick={checkUser}>Login</button>

            <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>
        </div>
        </div>

      

    </div>
        
     )
}

export default Login
