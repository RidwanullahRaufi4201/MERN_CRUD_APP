
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage(){
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const [result,setresult]=useState(0)

    const navigate=useNavigate()


    const handleLogin=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/login",{username:username,password:password})
        .then(resp=>{
               if(resp.data.case==1||resp.data.case==2){
                       alert("Invalidae Credential")
                       return 
               }
               isLogin(true)
               navigate("/home")
        })
        .catch(err=>console.log(err))

       
 
    
    }

    

    return (<>
             <div className="container-fluid">
 
                <div className="row bg-danger">
                    <div className="col-md-12 p-2">
                        <h4 className="text-center text-white">Login Page</h4>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    
                    <div className="col-md-5">
                         <form onSubmit={handleLogin} action="" method="post">
                            <div className="form-group">
                                <label htmlFor="">UserName</label>
                                <input type="text" value={username} onChange={(e)=>setusername(e.target.value)}  className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="text"  value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control" />
                            </div>
                            <div className="form-group mt-2">
                               
                                <input type="submit"  className="btn btn-sm btn-primary" />
                                <div>
                                    <small>dont have account ? <Link to={"/register"}>Register</Link> </small>
                                </div>
                            </div>
                         </form>
                         
                    </div>
                  
                </div>
             </div>
    </>)
}

export default LoginPage