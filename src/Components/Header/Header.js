import React from 'react'

function Header() {
    return (
            <div className='flex flex-row justify-center items-center '>
                <div className='mr-8'>
                    <img class="h-[4.5rem] rounded-full" src='https://www.sciastra.com/Assets/Images/newsciastra.jpg'></img>
                </div>
                <div className=''>
                    <ul className='flex flex-row uppercase text-[15px] p-8 '>
                        <li className='mx-7 p-1'>Home</li>
                        <li className='mx-7 p-1'>Courses</li>
                        <li className='mx-7 p-1'>Selections</li>
                        <li className='mx-7 p-1'>Blog</li>
                        <li className='mx-7 p-1'>Materials</li>
                        <li className='mx-7 p-1 text-transparent bg-clip-text bg-gradient-to-r from-[#9CBAF7] to-[#9010B0] border-b-2  border-[#9010B0]'>Team</li>
                        <li className='mx-7 p-1'>Contact Us</li>
                    </ul>
                </div>
                <button className='pl-4 pr-4 pt-2 pb-2 mr-10 text-white uppercase text-sm rounded-3xl bg-gradient-to-r from-[#9010B0] to-[#e7accc]'>Login</button>
            </div>
    )
}

export default Header