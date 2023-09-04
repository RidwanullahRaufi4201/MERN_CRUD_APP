
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './components/HomePage'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import CreateStudents from './components/CreateStudents'
import UpdateStudent from './components/UpdateStudent'
function App() {
  

  return (
    <>
        <BrowserRouter>
             <Routes>
                <Route path="/" element={<HomePage/>}>Home</Route>
                <Route path="/create" element={<CreateStudents/>}>Create</Route>
                <Route path="/update/:id" element={<UpdateStudent/>}>Update</Route>
              
              
             </Routes>
        </BrowserRouter>  
    </>
  )
}

export default App
