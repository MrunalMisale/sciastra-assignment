import React from 'react'
import Profile from './Assets/profile.png'
import Profile2 from './Assets/profile2.png'
function MentorContain() {
    return (
        <div className='w-full'>
            <div className='mx-auto text-center font-medium text-4xl w-auto mt-32 mb-10 font-poppins'>
                <h1 className='bg-gradient-to-r from-[#234EB0] from-5% to-[#9010b0] text-transparent bg-clip-text'>Meet your mentors</h1>
            </div>
            <div className='w-11/12 mx-auto flex flex-row justify-center items-start gap-5 flex-wrap'>
                <div className='w-1/5 flex flex-col items-center'>
                    <img src={Profile2} className='h-[4.8rem] '></img>
                    <p className="mt-2">Anjali  Tripathi</p>
                    <p>Cambridge University, UK</p>
                </div>
                <div className='w-1/5 flex flex-col items-center'>
                    <img src={Profile} className='h-[4.8rem] '></img>
                    <p className="mt-2">Shubham</p>
                    <p>Cambridge University, UK</p>
                </div>
                <div className='w-1/5 flex flex-col items-center'>
                    <img src={Profile} className='h-[4.8rem] '></img>
                    <p className="mt-2">Parth Mishra</p>
                    <p>Cambridge University, UK</p>
                </div>
                <div className='w-1/5 flex flex-col items-center'>
                    <img src={Profile} className='h-[4.8rem] '></img>
                    <p className="mt-2">Jit Jain</p>
                    <p>Cambridge University, UK</p>
                </div>
                <div className='w-1/5 flex flex-col items-center'>
                    <img src={Profile} className='h-[4.8rem] '></img>
                    <p className="mt-2">Mahesh G</p>
                    <p>Cambridge University, UK</p>
                </div>
                <div className='w-1/5 flex flex-col items-center'>
                    <img src={Profile2} className='h-[4.8rem] '></img>
                    <p className="mt-2">Dr. Prerna Tiwari</p>
                    <p>Cambridge University, UK</p>
                </div>
                <div className='w-1/5 flex flex-col items-center'>
                    <img src={Profile2} className='h-[4.8rem] '></img>
                    <p className="mt-2">Dr. Shweta Kapoor</p>
                    <p>Cambridge University, UK</p>
                </div>
                <div className='w-1/5 flex flex-col items-center'>
                    <img src={Profile} className='h-[4.8rem] '></img>
                    <p className="mt-2">Subhashish P</p>
                    <p>Cambridge University, UK</p>
                </div>
                <div className='w-1/5 flex flex-col items-center'>
                    <img src={Profile} className='h-[4.8rem] '></img>
                    <p className="mt-2">Akshat Mehta</p>
                    <p>Cambridge University, UK</p>
                </div>
                <div className='w-1/5 flex flex-col items-center'>
                    <img src={Profile} className='h-[4.8rem] '></img>
                    <p className="mt-2">Mit Parekh</p>
                    <p>Cambridge University, UK</p>
                </div>
                <div className='w-1/5 flex flex-col items-center'>
                    <img src={Profile2} className='h-[4.8rem] '></img>
                    <p className="mt-2">Tiasha Das</p>
                    <p>Cambridge University, UK</p>
                </div>
                <div className='w-1/5 flex flex-col items-center'>
                    <img src={Profile} className='h-[4.8rem] '></img>
                    <p className="mt-2">Suhas Jain</p>
                    <p>Harvard University, UK</p>
                </div>
            </div>

        </div>
    )
}

export default MentorContain;