import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import App from "../App";

function HomePage(){
    const [students,setstudents]=useState([])

      const deleteStudent=(id)=>{
           axios.delete(`http://localhost:3000/delete/${id}`)
           .then(res=>console.log(res))
           .catch(err=>console.log(err))
      }
    useEffect(()=>{
        axios.get("http://localhost:3000/students")
        .then((result=>{
            setstudents(result.data)
            
        }))
        .catch(err=>console.log(err))
    },[students])

   
    return (<>
          <div className="container-fluid">
            <div className="row bg-danger justify-content-center">
                <div className="col-md-10">
                    <h3 className="text-white mt-3 text-center">MERN CRUD</h3>
                </div>
               
            </div>
            <div className="row justify-content-center">
                <div className="col-8 m-3 text-end ">
                   <Link to="/create" className="btn btn-primary">Add Student</Link>
                </div>
            <div className="col-md-8 mt-4 text-center">
                    <table className="table table-striped">
                        <tr className="border-1">
                            <th  className="border-1" >Name</th>
                            <th  className="border-1">Email</th>
                            <th  className="border-1">Address</th>
                            <th  className="border-1">Phone</th>
                            <th  className="border-1">Age</th>
                            <th  className="border-1">Action</th>
                        </tr>
                        {
                            students.map((student)=>{
                                return <tr>
                                      <td  className="border-1">{student.name}</td>
                                      <td  className="border-1">{student.email}</td>
                                      <td  className="border-1">{student.address}</td>
                                      <td  className="border-1">{student.phone}</td>
                                      <td  className="border-1">{student.age}</td>
                                      <td  className="border-1">
                                        <Link to={`/update/${student._id}`} className="btn btn-sm btn-success ">Edit</Link>
                                        <button type="button" className="btn btn-sm btn-danger ms-1" onClick={()=>deleteStudent(student._id)}>Delete</button>
                                      </td>
                                </tr>
                            })
                        }
                    </table>
                </div>
            </div>
          </div>
    
    </>)
}


export default HomePage