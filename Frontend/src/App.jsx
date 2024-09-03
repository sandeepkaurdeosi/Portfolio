
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/about.jsx'
import Education from './Education/Education.jsx'
import Skills from './Skills/Skills.jsx'
import Projects from './Project/Projects.jsx'
import Conatct from './Components/Conatct.jsx'

function App() {
  return (
    <>
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/education' element={<Education/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/contact' element={<Conatct/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
   
    </>
  )
}

export default App