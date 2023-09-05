const express =require("express")
const mongoose = require('mongoose');
const cors=require("cors")

const app=express()
app.use(express.json())
app.use(cors())

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/school');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const studentSchema = new mongoose.Schema({
    name: String,
    email:String,
    address:String,
    phone:Number,
    age:Number
    
  });

const userSchema=mongoose.Schema({
      username:{
        type:String,
        required:true,
        unique:true
      },
      password:{
        type:String,
        required:true,
      
      }
})



  const studentModel = mongoose.model('student', studentSchema);
  const userModel=mongoose.model("users",userSchema)

  app.post("/create",(req,res)=>{
    studentModel.create(req.body)
    .then(result => {
      console.log(result);
      res.status(201).json({ message: "Student created successfully", data: result });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    });

  })


  app.get("/students",(req,res)=>{
        studentModel.find()
        .then(result=>res.json(result))
        .catch(err=>res.json(err))
  })


  app.get("/getstudent/:id",(req,res)=>{
              studentModel.findById({_id:req.params.id})
              .then((student)=>res.json(student))
              .catch(err=>console.log(err))
  })


app.put("/update/:id",(req,res)=>{
     studentModel.findByIdAndUpdate({_id:req.params.id},{name:req.body.name,email:req.body.email,address:req.body.address,phone:req.body.phone,age:req.body.age})
     .then((result)=>res.json(result))
     .catch((err)=>console.log(err))
})

  app.delete("/delete/:id",(req,res)=>{
         studentModel.findByIdAndDelete({_id:req.params.id})
         .then((res)=>res.json(res))
         .catch((err)=>console.log(err))
  })





app.post("/register",(req,res)=>{
     try{
          userModel.create(req.body)
          .then(resp=>res.json(resp))
          .catch(err=>console.log(err))
     }catch(err){
      console.log(err)
     }
})

app.post("/login",async(req,res)=>{
  try{
          const {username,password}=req.body
          const user=await userModel.findOne({username})
          if(!user){
             return res.json({message:"No User Found",case:1})
          }
          if(user.password!==password){
            return res.json({message:"No User Found",case:2}) 
          }
          res.json({message:"Login Successfully",case:3})
         
  }catch(err){
   console.log(err)
  }
})






app.get('/',(req,res)=>{
    res.send("Ridwanullah Raufi Coding Hub")
})














app.listen(3000,()=>{
    console.log("server running on port:3000")
})