import React from 'react'

import HeroImage from "../assets/heroImage.jpg"
import { BsArrowRight } from "react-icons/bs"

import { Link } from "react-scroll";
import Typed from 'react-typed';

const Home = () => {
    return (
        <>
        
        <div name="home" 
        className='text-white w-full  h-screen bg-gradient-to-b from-black via-black to-gray-800'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl text-white font-bold'>
                        
                        
                        <Typed
                    strings={["I'm a Frontend Developer"]}
                    typeSpeed={200}
                    backDelay={50}
                    backSpeed={100}
                    loop={true}
                />
                        
                        
                        </h2>
                    <p className='text-gray-500 py-4 max-w-md'> I have 2 years of experience building and desgining Websites.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Express JS .</p>
                    <div>
                        <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>

                                < BsArrowRight size={25} className='ml-1' />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='md:ml-5'>
                    <img src={HeroImage} alt="my profile"
                    className='rounded-2xl mx-auto w-2/3 md:w-full h-full'  />

                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
