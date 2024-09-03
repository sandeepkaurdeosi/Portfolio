import React from 'react'
import { SiInstagram } from "react-icons/si";
import { TbBrandLinkedin } from "react-icons/tb";
import { AiOutlineGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <div>
    <footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* <!-- About Me Column --> */}
    <div className='ml-10'>
      <h4 className="font-bold mb-2 text-xl">About Me</h4>
      <p className="text-sm">I'm a passionate web developer specializing in modern web technologies and design.</p>
    </div>

    {/* <!-- Quick Links Column --> */}
    <div className='ml-10'>
      <h4 className=" font-bold mb-2 text-xl">Quick Links</h4>
      <ul>
        <li><a href="#" className="text-sm hover:text-gray-400">Home</a></li>
        <li><a href="#" className="text-sm hover:text-gray-400">About Me</a></li>
        <li><a href="#" className="text-sm hover:text-gray-400">Projects</a></li>
        <li><a href="#" className="text-sm hover:text-gray-400">Contact</a></li>
      </ul>
    </div>

    {/* <!-- Contact Info Column --> */}
    <div>
      <h4 className="font-bold mb-2 text-xl ">Contact Information</h4>
      <p className="text-sm pb-2 ">Gmail: <a href="mailto:sandeepdeosi7@gmail.com" className="hover:text-gray-400">sandeepdeosi7@gmail.com</a></p>
      <p className="text-sm pb-2">Phone: +91 9501475016</p>
      <p className="text-sm">Location: Sunam, Dist. Sangrur, Punjab</p>
    </div>

    {/* <!-- Social Media Column --> */}
    <div className='ml-12'>
      <h4 className="font-bold mb-2 text-xl">Follow Me</h4>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/sandeep-kaur-deosi" target="_blank">
          <TbBrandLinkedin className="h-6 w-6 hover:opacity-75"/> 
        </a>
        <a href="https://github.com/sandeepkaurdeosi" target="_blank">
          <AiOutlineGithub className="h-6 w-6 hover:opacity-75"/>
        </a>
        <a href="https://twitter.com/Sandeep__Deosi" target="_blank">
          <FaXTwitter className="h-6 w-6 hover:opacity-75"/>
        </a>
      </div>
    </div>
  </div>
  <div className="text-center mt-8">
    <p>© 2024 Sandeep Kaur Deosi. All rights reserved.</p>
  </div>
</footer>

    </div>
    </>
  )
}

export default Footer