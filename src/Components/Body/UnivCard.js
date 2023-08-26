import React from 'react'
import Cambridge from "./Assets/Cambridge.jpg"
import Harvard from "./Assets/Harvard_University_logo.png"
import California from './Assets/University_of_California_logo.png'
import Zurich from './Assets/ETH_zurich.png'
import Planck from './Assets/Max_Planck_Institute.png'
import Edinburg from './Assets/University_of_Edinburgh-Logo.png'
import Hopkins from './Assets/John_Hopkins.png' 
import Michigan from './Assets/Michigan_State.png'
import Illinois from './Assets/University of Illinois.png'
import Humboldt from './Assets/Humboldt Univ.png'
function UnivCard() {
  return (
    <div className='bg-slate-100 w-11/12 mx-auto shadow-black shadow-2xl h-auto rounded-lg pb-10'>
        <div className='flex flex-row justify-center items-start pt-14 gap-8 h-full w-full flex-wrap'>
            <div className=' w-1/5 bg-white h-28 flex justify-center items-center rounded-lg shadow-xl shadow-slate-300'>
                <img src={Cambridge} className='px-4'></img>
            </div>
            <div className=' w-1/5 bg-white h-28 flex justify-center items-center rounded-lg shadow-xl shadow-slate-300'>
                <img src={Harvard} className='px-4'></img>
            </div>
            <div className=' w-1/5 bg-white h-28 flex justify-center items-center rounded-lg shadow-xl shadow-slate-300'>
                <img src={California} className='h-24' ></img>
            </div>
            <div className=' w-1/5 bg-white h-28 flex justify-center items-center rounded-lg shadow-xl shadow-slate-300'>
                <img src={Zurich} className='h-14'></img>
            </div>
            <div className=' w-1/5 bg-white h-28 flex justify-center items-center rounded-lg shadow-xl shadow-slate-300'>
                <img src={Planck} className='px-2'></img>
            </div>
            <div className=' w-1/5 bg-white h-28 flex justify-center items-center rounded-lg shadow-xl shadow-slate-300'>
                <img src={Edinburg} className=''></img>
            </div>
            <div className=' w-1/5 bg-white h-28 flex justify-center items-center rounded-lg shadow-xl shadow-slate-300'>
                <img src={Hopkins} className=''></img>
            </div>
            <div className=' w-1/5 bg-white h-28 flex justify-center items-center rounded-lg shadow-xl shadow-slate-300'>
                <img src={Michigan} className='px-2'></img>
            </div>
            <div className=' w-1/5 bg-white h-28 flex justify-center items-center rounded-lg shadow-xl shadow-slate-300'>
                <img src={Illinois} className='px-2'></img>
            </div>
            <div className=' w-1/5 bg-white h-28 flex justify-center items-center rounded-lg shadow-xl shadow-slate-300'>
                <img src={Humboldt} className='px-2'></img>
            </div>
            {/* <div className=' w-2/6 h-28 flex justify-center items-center '>
                <p className='bg-gradient-to-br from-[#9010b0] from-50% to-[#234EB0] text-transparent bg-clip-text text-4xl'>and many more...</p>
            </div> */}
        </div>
    </div>
  )
}

export default UnivCard;