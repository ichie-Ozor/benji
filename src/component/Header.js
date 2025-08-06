import React from 'react'
import menu from '../assets/menu.png'
import logo from '../assets/Logo.png'

function Header() {
    return (
        // <div className='bg-white h-[46px] lg:h-[101px] w-full'>
        //     <div className='flex items-center my-4 mx-2 items-self-center md:justify-self-center w-full'>
        //         <div className='grow flex justify-start md:justify-center w-[20%] pl-2 sm:pl-4'>
        //             <img src={logo} alt='' className='h-[17px] w-[80px]' />
        //         </div>
        //         <div className='flex grow-0 justify-between items-center gap-4 sm:gap-10 md:hidden'>
        //             <div className='text-[11px] sm:text-[14px] text-white bg-[#144f9a] p-[0.4rem] px-2 rounded-[8px]'>Get Started</div>
        //             <span className='text-[11px] sm:text-[14px] text-[#144f9a]'>Login</span>
        //             <img src={menu} alt='' className='' />
        //         </div>
        //         <div className='hidden grow-0 justify-between md:justify-evenly items-center text-[12px] lg:text-[14px] md:gap-8 md:flex w-[80%]'>
        //             <span>How it Works</span>
        //             <span>Success Stories</span>
        //             <span>Top Performers</span>
        //             <span>Why Choose us</span>
        //             <div className='text-[11px] sm:text-[14px] text-white bg-[#144f9a] p-[0.4rem] px-2 rounded-[8px]'>Get Started</div>
        //             <span className='text-[11px] sm:text-[14px] text-[#144f9a]'>Login</span>
        //         </div>
        //     </div>
        // </div>
        <div className='bg-white h-[46px] lg:h-[101px] w-full'>
            <div className='flex items-center justify-center h-full mx-auto max-w-7xl'>
                <div className='flex items-center justify-between w-full px-4'>
                    <div className='flex justify-start w-[20%]'>
                        <img src={logo} alt='' className='h-[17px] w-[full sm:w-[80px]' />
                    </div>
                    <div className='flex justify-between items-center gap-4 sm:gap-10 md:hidden'>
                        <div className='text-[11px] sm:text-[14px] text-white bg-[#144f9a] p-[0.4rem] px-2 rounded-[8px]'>Get Started</div>
                        <span className='text-[11px] sm:text-[14px] text-[#144f9a]'>Login</span>
                        <img src={menu} alt='' className='' />
                    </div>
                    <div className='hidden justify-between items-center text-[12px] lg:text-[14px] md:gap-8 md:flex w-[80%]'>
                        <span>How it Works</span>
                        <span>Success Stories</span>
                        <span>Top Performers</span>
                        <span>Why Choose us</span>
                        <div className='text-[11px] sm:text-[14px] text-white bg-[#144f9a] p-[0.4rem] px-2 rounded-[8px]'>Get Started</div>
                        <span className='text-[11px] sm:text-[14px] text-[#144f9a]'>Login</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header


