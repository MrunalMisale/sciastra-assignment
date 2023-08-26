import React from 'react'

function LeadMentors() {
    return (
        <div className='h-96 flex flex-row justify-center items-center my-10 ml-14'>
            <div className='p-5 w-2/12 h-5/6 bg-slate-200  rounded-2xl flex flex-col items-center'>
                <p className='bg-gradient-to-br from-[#4224ea] to-[#9010b0] text-transparent bg-clip-text text-lg font-poppins mt-2'>Mentor & Advisor</p>
                <img className="h-32 rounded-full mt-3" src='https://www.sciastra.com/teams/dr_omkar.jpg'></img>
                <div className='text-center mt-5'>
                    <p className='font-poppins text-slate-600 text-[16px] font-normal'>Dr. Omkar</p>
                    <p className='font-poppins text-slate-600 text-xs font-normal mt-2'>Principal Project Scientist</p>
                    <p className='font-poppins text-slate-600 text-xs font-normal mt-1'>IIT Madras</p>
                </div>
            </div>

            <div className='w-6/12  flex flex-row justify-center items-center p-10 h-full gap-10'>
                <div className='w-2/6  flex flex-col items-center'>
                    <img className="h-32 rounded-full mt-3" src='https://www.sciastra.com/teams/akhil_tripathi_niser.jpg'></img>
                    <p className='mt-3 font-poppins text-slate-800'>Akhil Tripathi</p>
                    <button className='bg-gradient-to-br from-[#4224ea] to-[#9010b0] px-3 py-1 mt-4 rounded-2xl text-white font-light'>Message him now</button>
                </div>
                <div className='w-2/6  flex flex-col justify-center items-center'>
                    <img className="h-[7.3rem] rounded-full object-center mt-3" src='https://www.sciastra.com/teams/vivek_dwivedi_niser.jpg'></img>
                    <p className='mt-6 font-poppins text-slate-800'>Vivek Dwivedi</p>
                    <button className='bg-gradient-to-br from-[#4224ea] to-[#9010b0] px-3 py-1 mt-4 rounded-2xl text-white font-light' >Message him now</button>
                </div>
            </div>
        </div>
    )
}

export default LeadMentors;