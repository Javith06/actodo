import { Link } from "react-router-dom"
import { use, useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props)
{

    const users=props.users
    const setusers=props.setusers
    const navigate= useNavigate()
    const [Eusername,setEusername]=useState()
    const[Epassword,setEpassword]=useState()

    function handleUInput(evt)
    {
        setEusername(evt.target.value)
    }

    function handlePInput(evt)
    {
        setEpassword(evt.target.value)
    }

    function addUser()
    {
        setusers([...users,{username:Eusername,password:Epassword}])
        navigate("/")
    }

    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1>Hey Hi👋</h1>
                <p>Signup here!</p>

                <div className="flex flex-col gap-2 my-2">
                <input type="text"
                className="w-52 border-black p-1 bg-transparent border rounded-md"
                placeholder="Username"
                onChange={handleUInput}/>

                <input type="text"
                className="w-52 border-black p-1 bg-transparent border rounded-md"
                placeholder="Password"
                onChange={handlePInput}/>

                <input type="text"
                className="w-52 border-black p-1 bg-transparent border rounded-md"
                placeholder="Confirm password"/>

                <button onClick={addUser} className="bg-[#FFA200] w-24 p-1 rounded-md">Signup</button>

                <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
            </div>
            </div>

          

        </div>
     )
}

export default Signup