import React from 'react'
import bg from '../assets/BG-image.jpg'
import star from '../assets/star.png'
import man from '../assets/man.png'

function Top() {
    return (
        <div className="relative h-[657px] sm:h-[400px] w-full sm:mb-[68.2px]">
            <img
                src={bg}
                alt='Background'
                className="absolute w-full h-full object-cover -z-40 block sm:hidden"
            />
            <div className="absolute w-full h-full object-cover -z-40 hidden sm:block bg-[#dfdfdf]"></div>
            <div className='grid sm:grid-cols-2 px-4 pt-4 md:px-[5rem]'>
                <div className='col-span-1'>
                    <span className='text-[25px] sm:text-[32px] text-[#1a1a1a] font-[700] text-center sm:text-left flex leading-10 sm:leading-[50px] md:w-[26rem] md:pt-4'>Connecting Top Sales Talent With Leading Brokerage Firms</span>
                    <span className='text-[#6f6f6f] text-[16px] sm:text-[18px] font-[700] leading-5 sm:leading-8 flex text-center sm:text-left sm:mt-2 md:w-[20rem]'>The first data-driven marketplace where performance speakers louder than resumes.</span>
                    <div className='grid sm:flex w-full md:w-[70%] mt-6 gap-2'>
                        <button className='bg-[#144f9a] border border-[#144f9a] sm:hidden rounded-[8px] px-[12px] text-[12px] text-white py-3 sm:flex-1'>Join as a Sales Professional</button>
                        <button className='hidden bg-[#144f9a] border border-[#144f9a] sm:bg-transparent rounded-[8px] px-[12px] text-[12px] text-white sm:text-[#144f9a] py-3 sm:flex sm:flex-1'>Join as a Sales Pro</button>
                        <button className='border border-[#144f9a] py-3 text-[12px] rounded-[8px] text-[#144f9a] sm:flex-1'>Join as a Broker</button>
                    </div>
                </div>
                <div className='bg-white w-full rounded-t-[8px] h-[310px] mt-10 p-4 block sm:hidden'>
                    <div className='flex justify-between'>
                        <span className='text-[#343a40] text-[12px] font-[700]'>Broker Dashboard Preview</span>
                        <span className='text-[#6c757d] text-[12px]'>My Dashboard</span>
                    </div>
                    <div className='grid gap-1 mt-4'>
                        <div className='bg-[#dfdfdf] border-l-4 rounded-l-[8px] rounded-r-[4px] p-1 border-l-[#144f9a] font-[700]'>
                            <p className='text-[#495057] text-[10px]'>Retention Rate</p>
                            <span className='text-[#495057] text-[14px]'>45%</span>
                        </div>
                        <div className='bg-[#dfdfdf] border-l-4 rounded-l-[8px] rounded-r-[4px] p-1 border-l-[#144f9a] font-[700]'>
                            <p className='text-[#495057] text-[10px]'>Avg. Monthly Salary</p>
                            <span className='text-[#495057] text-[14px]'>$1K</span>
                        </div>
                        <div className='bg-[#dfdfdf] border-l-4 rounded-l-[8px] rounded-r-[4px] p-1 border-l-[#144f9a] font-[700]'>
                            <p className='text-[#495057] text-[10px]'>Rating</p>
                            <span className='text-[#495057] text-[14px] flex'>5.0
                                <img src={star} alt='' className='w-4 h-4 mt-1' />
                                <img src={star} alt='' className='w-4 h-4 mt-1' />
                                <img src={star} alt='' className='w-4 h-4 mt-1' />
                                <img src={star} alt='' className='w-4 h-4 mt-1' />
                                <img src={star} alt='' className='w-4 h-4 mt-1' />
                            </span>
                        </div>
                        <div className='bg-[#dfdfdf] border-l-4 rounded-l-[8px] rounded-r-[4px] p-1 border-l-[#144f9a] font-[700]'>
                            <p className='text-[#495057] text-[10px]'>Rating</p>
                            <span className='text-[#495057] text-[14px] flex'>5.0
                                <img src={star} alt='' className='w-4 h-4 mt-1' />
                                <img src={star} alt='' className='w-4 h-4 mt-1' />
                                <img src={star} alt='' className='w-4 h-4 mt-1' />
                                <img src={star} alt='' className='w-4 h-4 mt-1' />
                                <img src={star} alt='' className='w-4 h-4 mt-1' /></span>
                        </div>
                        <div className='bg-[#dfdfdf] border-l-4 rounded-l-[8px] rounded-r-[4px] p-1 border-l-[#144f9a] font-[700]'>
                            <p className='text-[#495057] text-[10px]'>Rating</p>
                            <span className='text-[#495057] text-[14px] flex'>5.0
                                <img src={star} alt='' className='w-4 h-4 mt-1' />
                                <img src={star} alt='' className='w-4 h-4 mt-1' />
                                <img src={star} alt='' className='w-4 h-4 mt-1' />
                                <img src={star} alt='' className='w-4 h-4 mt-1' />
                                <img src={star} alt='' className='w-4 h-4 mt-1' /></span>
                        </div>
                    </div>
                </div>
                <img src={man} alt='' className='hidden sm:block col-span-1 h-[400px] -mt-4 w-full' />
            </div>
            <div className='bg-[#ededed] hidden sm:flex h-[68px] justify-evenly items-center'>
                <span className='text-[#1a1a1a] text-[15px] font-[600]'>•Verified Performance Data</span>
                <span className='text-[#1a1a1a] text-[15px] font-[600]'>•500+Active Professionals</span>
                <span className='text-[#1a1a1a] text-[15px] font-[600]'>•95% Match Success Rate</span>
            </div>
        </div>
    )
}

export default Top
