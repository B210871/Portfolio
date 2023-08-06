import React from 'react'
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg"
// import installNode from "../assets/portfolio/installNode.jpg"
// import navbar from "../assets/portfolio/navbar.jpg"
// import reactParallax from "../assets/portfolio/reactParallax.jpg"
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
// import reactWeather from "../assets/portfolio/reactWeather.jpg"
import ZomatoW  from "../assets/portfolio/ZomatoW.png"
import Responsive_nav from "../assets/portfolio/Responsive_nav.png";
import RealTimeChat from "../assets/portfolio/RealTimeChat.png";
import API from "../assets/portfolio/API.png";
import TaskyW from "../assets/portfolio/TaskyW.png"
import MybookShow from "../assets/portfolio/MybookShowW.png"

 const Portfolio = () => {

 const Portfolios =[
    {
        id:1,
        src:ZomatoW,
        href: 'https://github.com/B210871/Zomato-Webpage.git',
    },
    {
        id:2,
        src:MybookShow,
        href: 'https://github.com/B210871/Book-Myshow-Clone-React',
    },
    // {
    //     id:3,
    //     src:navbar,
    //     href: 'https://www.linkedin.com/in/abhay-gautam-a0415326b/',
    // },
    {
        id:4,
        src:Responsive_nav,
        href: 'https://github.com/B210871/Hamburger',  
    },
    {
        id:5,
        src:API,
        href: 'https://github.com/B210871/Dance_Website',
    },
    {
        id:6,
        src:RealTimeChat,
        href: 'https://github.com/B210871/RealTimeChat',
    },
    {
        id:7,
        src:TaskyW,
        href: 'https://github.com/B210871/Tasky-frontend/blob/master/index.html',
    },
   

 ]


  return (
    <>
    
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-fulltext-white md:h-screen  '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col text-white justify-center w-full h-full clear-both'>
            <div className='pb-8 mt-14'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-white'>
                    Portfolio
                </p>
                <p className='py-6 '>
                   Check out some of my work right here 
                </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                
           
            {
                Portfolios.map(({id,src,href})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'  />
                    <div className='flex justify-center items-center'>
                        {/* <button  className='w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105'>Demo</button> */}
                        <button  className='w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105 '>
                            
                        <a href={href} 
                                
                    
                                target='_blank'
                                rel="noreferrer" 


                            >
                            Code </a></button>
                    </div>
                </div> 
                ))
            }
             </div>





        </div>
    </div>
    </>
  )

  }

  export default Portfolio;