import React from 'react'
import Navbar from '../Components/Navbar'
import Aboutme from '../Components/Aboutme'
import Footer from '../Components/Footer'

function about() {
  return (
   <>
   <div>
    <Navbar/>
    <div >
        <Aboutme/>
    </div>
    <Footer/>
   </div>
   </>

  )
}

export default about