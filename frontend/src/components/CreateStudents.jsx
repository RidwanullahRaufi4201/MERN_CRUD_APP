import React from "react";
import { useState } from "react";
import axios from 'axios'
import { useNavigate,Link } from "react-router-dom";


function CreateStudents()
{
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [address,setaddress]=useState("")
    const [phone,setphone]=useState("")
    const [age,setage]=useState("")
    const navigate = useNavigate();



    const submitform=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/create",{name,email,address,phone,age})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
        e.target.reset();
        navigate("/");


    }
    return(<>
          <div className="container-fluid">
            <div className="row bg-danger">
                <div className="col-md-12 p-3">
                    <h4 className="text-center text-white">Add Student</h4>
                </div>
            </div>
                <div className="row justify-content-center">
                    <div className="col-md-5 mt-4">
                   <form onSubmit={submitform}>
                           <div className="form-group">
                                  <label>Name</label>
                                  <input type="text"  onChange={(e)=>setname(e.target.value)} className="form-control" />
                           </div>
                           <div className="form-group">
                                  <label>Email</label>
                                  <input type="email"  onChange={(e)=>setemail(e.target.value)} className="form-control" />
                           </div>
                           <div className="form-group">
                                  <label>Address</label>
                                  <input type="text"  onChange={(e)=>setaddress(e.target.value)} className="form-control" />
                           </div>
                           <div className="form-group">
                                  <label>Phone</label>
                                  <input type="text"   onChange={(e)=>setphone(e.target.value)} className="form-control" />
                           </div>
                           <div className="form-group">
                                  <label>Age</label>
                                  <input type="number"  onChange={(e)=>setage(e.target.value)} className="form-control" />
                           </div>
                           <div className="form-group mt-2">
                           
                                  <input type="submit" className="btn btn-sm btn-primary" />
                                  <Link to="/" className="btn btn-sm btn-secondary ms-1">Back</Link>

                           </div>
                   </form>
                    </div>
                </div>

          </div>
      
    </>)
}


export default CreateStudents

