import React from 'react'
import aboutme from '../../public/aboutme.jpg'
import html from '../../public/html.png'
import css from '../../public/css.png'
import js from '../../public/js.png'
import performance from '../../public/performance.jpg'
import cross from '../../public/cross.jpg'

function Aboutme() {
    return (
        <>
            <div className='mt-32 mx-10 mb-20 '>
                {/* about me */}
                <div className='flex justify-center rounded-l-3xl ml-12 mr-12 mt-20'>
                    <div className='border-2  border-gray-200 rounded-l-3xl ml-10 shadow-2xl hover:cursor-pointer '>
                        <h1 className='text-4xl text-center p-4 pt-20 font-bold  text-gray-800' >About me</h1>
                        <div className='text-center'>
                            <img src={aboutme} alt='m' className='h-60 w-60 rounded-full ml-20 mr-10 mt-10'></img>
                            <div className='mt-10'>
                                <h1 className='text-xl p-4  text-gray-700'>Gmail: sandeepdeosi7@gmail.com</h1>
                                <h1 className='text-xl mt-4  text-gray-700'> Phone: +91 9501475016</h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-indigo-600  rounded-r-3xl pt-20 pl-20 pr-20 pb-20 text-2xl shadow-2xl text-white hover:cursor-pointer' >
                        <h1 className='mb-2'>Name : Sandeep Kaur </h1>
                        <h1 className='mb-2'>Surname : Deosi (Dhiman)</h1>
                        <h1 className='mb-2'>Father's Name : Sukhpal Singh</h1>
                        <h1 className='mb-2'>Mother's Name : Balwinder Kaur</h1>
                        <h1 className='mb-2'>Siblings : 2</h1>
                        <h1 className='mb-2'>City : Sunam</h1>
                        <h1 className='mb-2'>District : Sangrur</h1>
                        <h1 className='mb-2'>State : Punjab</h1>
                        <h1 className='mb-2'>Nationality : Indian</h1>
                        <h1 className='mb-2'>Martial Status : Single</h1>
                        <h1 className='mb-2'>Religion : Sikh</h1>
                        <h1 className='mb-2'>Language Known : Punjabi,English,Hindi</h1>
                    </div>
                </div>
                {/* what i do */}
                <div className='mt-20 mx-10 mb-20 shadow-2xl'>
                    <h1 className='text-4xl text-center border-2 p-4 rounded-t-3xl text-gray-800 bg-gray-50 border-gray-200'>
                        What I Do
                    </h1>
                    <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-10 rounded-b-3xl shadow-lg hover:cursor-pointer'>
                        <div className='flex flex-col lg:flex-row items-center mt-20'>
                            <div className='w-full lg:w-1/2'>
                                <img src={html} alt='Service' className='h-40 w-40 rounded-full mx-auto  object-cover shadow-lg'></img>
                            </div>
                            <div className='w-full lg:w-1/2 text-center text-white mt-10 lg:mt-0'>
                                <p className='text-2xl font-bold'>HTML & CSS</p>
                                <p className='text-lg mt-4'>Building clean, semantic HTML structures and styling them with modern CSS techniques.</p>
                            </div>

                        </div>
                        <div className='flex flex-col lg:flex-row items-center mt-20'>
                            <div className='w-full lg:w-1/2'>
                                <img src={js} alt='Service' className='h-40 w-40 rounded-full mx-auto object-cover shadow-lg'></img>
                            </div>
                            <div className='w-full lg:w-1/2 text-center text-white mt-10 lg:mt-0'>
                                <p className='text-2xl font-bold'>JavaScript & Frameworks</p>
                                <p className='text-lg mt-4'>Developing interactive features and components using JavaScript, React, and other cutting-edge frameworks.</p>
                            </div>

                        </div>
                        <div className='flex flex-col lg:flex-row items-center mt-20'>
                            <div className='w-full lg:w-1/2'>
                                <img src={performance} alt='Service' className='h-40 w-40 rounded-full mx-auto object-fill shadow-lg'></img>
                            </div>
                            <div className='w-full lg:w-1/2 text-center text-white mt-10 lg:mt-0'>
                                <p className='text-2xl font-bold'>Performance Optimization</p>
                                <p className='text-lg mt-4'>Ensuring fast load times and smooth interactions by optimizing code and leveraging best practices.</p>
                            </div>

                        </div>
                        <div className='flex flex-col lg:flex-row items-center mt-20'>
                            <div className='w-full lg:w-1/2'>
                                <img src={cross} alt='Service' className='h-40 w-40 rounded-full mx-auto  object-cover shadow-lg'></img>
                            </div>
                            <div className='w-full lg:w-1/2 text-center text-white mt-10 lg:mt-0'>
                                <p className='text-2xl font-bold'>Cross-Browser Compatibility</p>
                                <p className='text-lg mt-4'>Making sure my projects work flawlessly across different browsers and platforms.</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* approach */}
                <div className='mt-20 mx-10 mb-20 p-10 shadow-2xl bg-yellow-200 rounded-3xl hover:cursor-pointer'>
                    <h1 className='text-4xl font-bold text-center text-yellow-800'>My Approach</h1>
                    <p className='mt-5 text-lg text-center text-gray-800'>
                        I believe in a user-centered design approach, where the end-user’s needs and experiences guide my development process.
                        I’m dedicated to keeping up with the latest trends and technologies in front-end development to deliver high-quality,
                        future-proof solutions.
                    </p>
                </div>

            </div>
        </>
    )
}

export default Aboutme