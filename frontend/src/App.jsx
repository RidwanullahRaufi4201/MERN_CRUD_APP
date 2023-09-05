
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './components/HomePage'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import CreateStudents from './components/CreateStudents'
import UpdateStudent from './components/UpdateStudent'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
function App() {
  

  return (
    <>
        <BrowserRouter>
             <Routes>
                <Route path="/" element={<LoginPage/>}></Route>
                <Route path="/register" element={<RegisterPage/>}></Route>
                <Route path="/home" element={<HomePage/>}></Route>
                <Route path="/create" element={<CreateStudents/>}></Route>
                <Route path="/update/:id" element={<UpdateStudent/>}></Route>
              
              
             </Routes>
        </BrowserRouter>  
    </>
  )
}

export default App
