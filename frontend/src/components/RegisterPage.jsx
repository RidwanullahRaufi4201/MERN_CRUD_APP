
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterPage(){
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/register",{username:username,password:password})
        .then(res=>{
            console.log(res)
            setusername("")
            setpassword("")
        }
            )
        .catch(err=>{
           console.log("errr")
        })

    }
    return (<>
              <div className="container-fluid">
                <div className="row bg-danger">
                    <div className="col-md-12 p-2">
                        <h4 className="text-center text-white">RegisterPage 
                          Page</h4>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    
                    <div className="col-md-5">
                         <form onSubmit={handleSubmit} action="" method="post">
                            <div className="form-group">
                                <label htmlFor="">UserName</label>
                                <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="text" value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control" />
                            </div>
                            <div className="form-group mt-2">
                               
                                <input type="submit"  className="btn btn-sm btn-primary" />
                                <div>
                                    <small>already registerd ? <Link to={"/"}>Login</Link> </small>
                                </div>
                            </div>
                         </form>
                    </div>
                </div>
             </div>
    </>)
}

export default RegisterPage