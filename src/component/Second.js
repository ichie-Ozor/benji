import React from 'react'
import star from '../assets/star.png'
import page from '../assets/page.png'
import search from '../assets/search.png'
import chain from '../assets/chain.png'

const data = [
    {
        title: "Build Verified Profile",
        detail: "Employers submit performance data to our secure platform. No self-reporting needed.",
        icon: page
    },
    {
        title: "Get Your Performance Rating",
        detail: "Our algorithm calculates your  rating based on consistent, objective performance metrics Verified By Employers",
        icon: star
    },
    {
        title: "Research Culture",
        detail: "Access employee data on company treatment and team performance history.",
        icon: search
    },
    {
        title: "Connect & Match",
        detail: "Connect Get matched with brokers who value your style and career goals.",
        icon: chain
    },
]

const renderData = data.map((t, i) => (
    <div key={i}
        className='flex px-6 py-4 bg-[#dfdfdf] mb-1 rounded-[8px] sm:mx-2 sm:bg-[#ededed] border-[0.5px] border-[#cfcfcf] sm:hover:scale-y-[120%] transition duration-500 ease-in-out '
    >
        <div className='border-2 border-[#144f9a] rounded'></div>
        <div className='flex flex-col items-center justify-center mx-2'>
            <span className='text-white py-1 w-6 h6 bg-[#144f9a] flex items-center justify-center rounded-[50%] text-[8px] mb-2'>{i + 1}</span>
            <span className='text-[#144f9a] text-[10px]'>{t.title}</span>
            <span className='flex text-center text-[12px] w-[80%]'>{t.detail}</span>
            <img src={t.icon} alt='' className='mt-8 scale-75' />
        </div>
    </div>
))

function Second() {
    return (
        <div className='bg-white sm:bg-[#dfdfdf] px-6'>
            <div>
                <span className='text-[26px] text-[#1a1a1a]'>How FXTownhall Works</span>
                <p className='text-left text-[20px] text-[#1a1a1a]'>Transparent performance tracking meets intelligent matching for better hiring decisions</p>
            </div>
            <div className='flex justify-center gap-4 mt-6'>
                <button className='text-white bg-[#144f9a] rounded-[8px] text-[12px] py-2 px-4'>Fro Sales Pro</button>
                <button className='text-[#144f9a] bg-white text-[12px] border border-[#144f9a] rounded-[8px] py-2 px-4'>For Company</button>
            </div>
            <div className='grid sm:flex px-1 mt-4 sm:mt-16'>{renderData}</div>
            <div>
                <button className='bg-[#144f9a] rounded-[5px] text-white text-[14px] sm:text-[16px] py-1 px-2 mt-4 sm:mt-8'>Get Started</button>
                <div className='sm:hidden'>
                    <span className='text-[28px] text-[#144f9a] font-[400]'>Ready to Transform Your Sales Career or Team?</span>
                    <p className='font-[700] text-[18px] text-[#1a1a1a]'>Join the marketplace where performance data drives better decisions and career growth</p>
                    <div className='flex justify-center gap-[10px] mt-8'>
                        <button className='border border-[#144f9a] rounded-[5px] px-2 py-3 text-[#144f9a] bg-white font-[500]'>Join as Sales Pro</button>
                        <button className='border border-[#144f9a] rounded-[5px] px-2 py-3 text-[#144f9a] bg-white font-[500]'>Join as a Company</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second
