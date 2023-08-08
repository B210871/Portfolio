import React from 'react'

 const Contact = () => {
  return (
    <div name="contact" className='text-white w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4'>
        <div className='flex flex-col justify-center mx-auto h-full p-4 max-w-screen-lg'>
            <div className='pb-8'>
                <p className='text-4xl border-b-4 border-gray-500 font-bold inline'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/c90b2766-4ffa-4b44-ac42-724f671c8bf3" method="POST" className='flex flex-col w-full md:w-1/2'>
                    <input
                     type="text"
                      name="name"
                       placeholder='Enter your name'
                       className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <input
                     type="text"
                      name="email"
                       placeholder='Enter your email'
                       className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
                       />
                       <textarea name="message"   rows="10"
                       className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Enter your message' >

                       </textarea>
                       <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}
export default Contact;