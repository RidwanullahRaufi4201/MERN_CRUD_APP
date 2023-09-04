import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import { useNavigate,Link,useParams } from "react-router-dom";


function UpdateStudent()
{
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [address,setaddress]=useState("")
    const [phone,setphone]=useState("")
    const [age,setage]=useState("")
    const navigate = useNavigate();
    const {id}=useParams()


    useEffect(()=>{
        axios.get(`http://localhost:3000/getstudent/${id}`)
        .then(result=>{
            setname(result.data.name)
            setemail(result.data.email)
            setaddress(result.data.address)
            setphone(result.data.phone)
            setage(result.data.age)
        })
        .catch(err=>console.log(err))
    },[])



    const updateForm=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3000/update/${id}`,{name,email,address,phone,age})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
        e.target.reset();
        navigate("/");


    }
    return(<>
          <div className="container-fluid">
          
                <div className="row justify-content-center">
                    <div className="col-md-5 mt-4">
                   <form onSubmit={updateForm}>
                           <div className="form-group">
                                  <label>Name</label>
                                  <input type="text" value={name}  onChange={(e)=>setname(e.target.value)} className="form-control" />
                           </div>
                           <div className="form-group">
                                  <label>Email</label>
                                  <input type="email" value={email}  onChange={(e)=>setemail(e.target.value)} className="form-control" />
                           </div>
                           <div className="form-group">
                                  <label>Address</label>
                                  <input type="text"  value={address} onChange={(e)=>setaddress(e.target.value)} className="form-control" />
                           </div>
                           <div className="form-group">
                                  <label>Phone</label>
                                  <input type="text" value={phone}  onChange={(e)=>setphone(e.target.value)} className="form-control" />
                           </div>
                           <div className="form-group">
                                  <label>Age</label>
                                  <input type="number" value={age} onChange={(e)=>setage(e.target.value)} className="form-control" />
                           </div>
                           <div className="form-group mt-2">
                           
                                  <input type="submit" value="Update" className="btn btn-sm btn-primary" />
                                  <Link to="/" className="btn btn-sm btn-secondary ms-1">Back</Link>

                           </div>
                   </form>
                    </div>
                </div>

          </div>
      
    </>)
}


export default UpdateStudent

