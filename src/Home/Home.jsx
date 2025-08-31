import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'

function Home() {
  return (
    <>
    <div className='min h-screen'>
        <Navbar/>
        <div>
            <Banner/>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default Home