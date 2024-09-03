import React from 'react';
import me from '../../public/me.jpg';
import { SiLinkedin } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import insta from '../../public/insta.jpg';
import linkedin from '../../public/x.jpg';
import twitter from '../../public/twitter.jpg';
import github from '../../public/github.png';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <>
            <div>
                <div className='flex ml-10 mt-20'>
                    <div className='mt-32 w-1/2'>
                        <div className='pb-5'>
                            <h1 className='text-5xl text-gray-900'>
                                Hello, I am <span className='text-teal-500'>Sandeep Kaur</span> <br />Welcomes!!! to my Portfolio
                            </h1>
                        </div>
                        <div className="flex space-x-10 mt-10">
                            <a href="https://www.linkedin.com/in/sandeep-kaur-deosi" target="_blank">
                                <SiLinkedin className="h-12 w-12 text-blue-700 hover:opacity-75" />
                            </a>
                            <a href="https://github.com/sandeepkaurdeosi" target="_blank">
                                <AiOutlineGithub className="h-12 w-12 text-gray-800 hover:opacity-75" />
                            </a>
                            <a href="https://twitter.com/sandeep__deosi" target="_blank">
                                <FaXTwitter className="h-12 w-12 text-blue-500 hover:opacity-75" />
                            </a>
                            <a href="https://instagram.com/sandeep_deosi" target="_blank">
                                <RiInstagramFill className="h-12 w-12 text-pink-600 hover:opacity-75" />
                            </a>
                        </div>
                        <div className='mt-20'>
                            <h2 className='text-4xl text-orange-500'>Explore my Portfolio...</h2>
                        </div>
                        <div className='pb-5 mt-24'>
                            <h2 className='text-xl text-gray-700'>
                                I'm a passionate Front-End Developer specializing in creating responsive and engaging web applications.
                                <br /><br />
                                With expertise in HTML, CSS, JavaScript, and modern frameworks like React, I bring ideas to life through clean code and intuitive design.
                                <br /><br />
                                I thrive on solving challenges and continuously improving my skills to stay ahead of industry trends.
                            </h2>
                        </div>
                    </div>
                    <div className='w-1/2 rounded-full border m-12'>
                        <img src={me} alt='me' className='rounded-3xl' />
                    </div>
                </div>

                {/* Overview Section */}
                <div className='mt-20 mb-20 ml-10 mr-10'>
                    <h1 className='text-center text-4xl p-2 font-bold bg-red-500 text-white hover:bg-red-600 hover:cursor-pointer rounded-xl'>
                        Overview
                    </h1>
                    <div className='border-2 mt-10 mb-10 rounded-xl bg-cyan-100'>
                        <div className='border-2 mt-10 mb-10 ml-10 w-1/2 rounded-xl bg-white shadow-lg hover:scale-105 cursor-pointer'>
                            <h1 className='text-3xl m-4 text-blue-600 font-bold'>Education</h1>
                            <div className='text-xl ml-4 mb-4 text-gray-700'>
                                I am currently pursuing a Bachelor’s degree in Computer Science Engineering, where I’ve developed a strong foundation in programming, algorithms, data structures, and software development.
                            </div>
                        </div>
                        <div className='border-2 mt-10 mb-10 ml-auto mr-10 w-1/2 rounded-xl bg-white shadow-lg hover:scale-105 cursor-pointer'>
                            <h1 className='text-3xl m-4 text-blue-600 font-bold'>Projects</h1>
                            <div className='text-xl ml-4 mb-4 text-gray-700'>
                                I have completed projects including a responsive Bookstore Website, a Personal Portfolio built with React and Tailwind CSS, a Tic-Tac-Toe Game, and other minor projects demonstrating my proficiency in front-end development.
                            </div>
                        </div>
                        <div className='border-2 mt-10 mb-10 ml-10 w-1/2 rounded-xl bg-white shadow-lg hover:scale-105 cursor-pointer'>
                            <h1 className='text-3xl m-4 text-blue-600 font-bold'>Skills</h1>
                            <div className='text-xl ml-4 mb-4 text-gray-700'>
                                I am skilled in front-end development with proficiency in HTML, CSS, JavaScript, and modern frameworks like React and Vite. My expertise extends to creating dynamic, user-friendly interfaces and optimizing web performance.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className='mt-20 ml-10 mr-10 mb-20'>
                    <h1 className='text-center text-4xl p-2 font-bold bg-purple-500 hover:bg-purple-600 text-white rounded-xl'>
                        My Services
                    </h1>
                    <div className='flex justify-between mt-10'>
                        <div className='ml-5 w-1/3 hover:scale-105 cursor-pointer'>
                            <h1 className='text-2xl border-2 bg-rose-900 text-white p-5 rounded-t-xl mt-5'>Responsive Web Designs & UI/UX Implementation</h1>
                            <p className='border-2 rounded-b-lg p-10 text-xl text-gray-700 bg-white shadow-2xl'>Creating mobile-friendly, visually appealing websites that provide a seamless user experience across all devices.</p>
                        </div>
                        <div className='ml-5 w-1/3 hover:scale-105 cursor-pointer'>
                            <h1 className='text-2xl border-2 bg-rose-900 text-white p-5 rounded-t-xl mt-5'>Single Page Applications & API Integration</h1>
                            <p className='border-2 rounded-b-lg p-10 text-xl text-gray-700 bg-white shadow-2xl'>Building dynamic, fast-loading web applications with React, and integrating third-party APIs to enhance functionality.</p>
                        </div>
                        <div className='ml-5 w-1/3 hover:scale-105 cursor-pointer'>
                            <h1 className='text-2xl border-2 bg-rose-900 text-white p-5 rounded-t-xl mt-5'>Performance Optimization & Maintenance</h1>
                            <p className='border-2 rounded-b-lg p-10 text-xl text-gray-700 bg-white shadow-2xl'>Optimizing web performance for fast load times and smooth user experiences across all devices.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className='mt-20 ml-10 mr-10 mb-20'>
                    <h1 className='text-center text-4xl p-2 font-bold bg-teal-500 hover:bg-teal-600 text-white rounded-xl'>Let’s Connect</h1>
                    <div className='flex mt-12 justify-evenly ml-12 mr-12'>
                        <a href='https://www.linkedin.com/in/sandeep-kaur-deosi'>
                            <img src={linkedin} alt='' className='h-30 w-20 rounded-lg' />
                        </a>
                        <a href="https://twitter.com/sandeep__deosi">
                            <img src={twitter} alt='' className='h-30 w-20 rounded-lg' />
                        </a>
                        <a href="https://instagram.com/sandeep_deosi">
                            <img src={insta} alt='' className='h-20 w-30 rounded-lg' />
                        </a>
                        <a href="https://github.com/sandeepkaurdeosi">
                            <img src={github} alt='' className='h-30 w-20 rounded-lg' />
                        </a>
                    </div>
                    <div className='flex justify-center'>
                        <Link to={"/Contact"} className='mt-20 bg-pink-500 hover:bg-pink-600 rounded text-white p-2 text-xl' >Contact</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
