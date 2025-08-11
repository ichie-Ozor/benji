import React from 'react'
import insta from '../assets/insta.png'
import book from '../assets/book.png'
import lin from '../assets/link.png'
import tik from '../assets/tik.png'
import tube from '../assets/tube.png'
import x from '../assets/x.png'

function Footer() {
    return (
        <div className='bg-[#1a1a1a] h-[473px] sm:h-[312px] w-full space-y-10 sm:space-y-4 p-5'>
            <div className='grid sm:flex h-[78%] bg-[#3f3f3f] pl-4 py-2 rounded-[8px] space-y-2 w-full sm:gap-4 sm:justify-center'>
                <div className='flex justify-between w-full sm:w-[70%] mr-4 pr-4'>
                    <div className='grid gap-2'>
                        <span className='text-white font-[600]'>Company</span>
                        <div className='text-[12px] text-gray-300 space-y-4'>
                            <p></p>
                            <p>Careers</p>
                            <p>Press</p>
                            <p>Contact</p>
                        </div>
                    </div>
                    <div className='grid gap-2'>
                        <span className='text-white font-[600]'>Product</span>
                        <div className='text-[12px] text-gray-300 space-y-4'>
                            <p>Features</p>
                            <p>Pricing</p>
                            <p>Security</p>
                            <p>Enterprise</p>
                        </div>
                    </div>
                    <div className='grid gap-2'>
                        <span className='text-white font-[600]'>Resources</span>
                        <div className='text-[12px] text-gray-300 space-y-4'>
                            <p>Blog</p>
                            <p>Help Center</p>
                            <p>Guides</p>
                            <p>API</p>
                        </div>
                    </div>
                    <div className='grid gap-2'>
                        <span className='text-white font-[600]'>Legal</span>
                        <div className='text-[12px] text-gray-300 space-y-4'>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                            <p>Cookie Policy</p>
                            <p>GDPR</p>
                        </div>
                    </div>
                </div>
                <div className='grid justify-start gap-1'>
                    <span className='text-[14px] text-gray-200 font-[700]'>Join Our Newsletter</span>
                    <p className='text-[12px] text-gray-300'>Get the latest updates and insights delivered to your inbox</p>

                    <input
                        type='email'
                        placeholder='Enter your email'
                        className='flex-1 px-2 py-3 rounded-[8px] bg-transparent border border-gray-300 text-[12px] font-[500]'
                    />
                    <div className='flex justify-start mt-2'>
                        <button className='bg-[#144f9a] text-white px-4 py-2 rounded-[8px] text-[14px] font-[500] transition-colors'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='border-t-[0.2px] border-gray-400 h-[22%] flex justify-between items-center w-full'>
                <span className='text-gray-400 text-[12px]'>© 2024 FXTownhall. All rights reserved.</span>
                <div className='flex gap-2 sm:gap-4'>
                    <img src={insta} alt='' className='sm:w-6 sm:h-6 w-4 h-4' />
                    <img src={book} alt='' className='sm:w-6 sm:h-6 w-4 h-4' />
                    <img src={lin} alt='' className='sm:w-6 sm:h-6 w-4 h-4' />
                    <img src={tik} alt='' className='sm:w-6 sm:h-6 w-4 h-4' />
                    <img src={tube} alt='' className='sm:w-6 sm:h-6 w-4 h-4' />
                    <img src={x} alt='' className='sm:w-6 sm:h-6 w-4 h-4' />
                </div>
            </div>
        </div>
    )
}

export default Footer
