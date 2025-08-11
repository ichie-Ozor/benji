import React from 'react'
import pad from '../assets/padlock.png'
import speed from '../assets/speed.png'
import wave from '../assets/wave.png'
import arrow from '../assets/arrow.png'
import person from '../assets/person.png'

const objective = [
    {
        title: "Objective Performance Tracking",
        detail: "No more guessing. Access verified sales performance data and industry-standard ratings that employers trust and candidates can rely on.",
        icon: arrow
    },
    {
        title: "Objective Performance Tracking",
        detail: "No more guessing. Access verified sales performance data and industry-standard ratings that employers trust and candidates can rely on.",
        icon: pad
    },
    {
        title: "Objective Performance Tracking",
        detail: "No more guessing. Access verified sales performance data and industry-standard ratings that employers trust and candidates can rely on.",
        icon: wave
    },
    {
        title: "Objective Performance Tracking",
        detail: "No more guessing. Access verified sales performance data and industry-standard ratings that employers trust and candidates can rely on.",
        icon: speed
    },

]

const success = [
    {
        icon: person,
        name: "Sarah Mustapha",
        title: "Senior Sales Executive",
        desc: "We hired 3 top performers in one month. Their verified ratings eliminated guesswork and our team's productivity increased 60%.",
        sal: 40,
        duration: 3
    },
    {
        icon: person,
        name: "Adamu Mustadeen",
        title: "Senior Sales Executive",
        desc: "We hired 3 top performers in one month. Their verified ratings eliminated guesswork and our team's productivity increased 60%.",
        sal: 60,
        duration: 3
    },
    {
        icon: person,
        name: "Offor Chukwuegbu",
        title: "Senior Design Executive",
        desc: "We hired 3 top performers in one month. Their verified ratings eliminated guesswork and our team's productivity increased 60%.",
        sal: 50,
        duration: 2
    },
    {
        icon: person,
        name: "Ayo Oniyeye",
        title: "Senior Production Executive",
        desc: "We hired 3 top performers in one month. Their verified ratings eliminated guesswork and our team's productivity increased 60%.",
        sal: 30,
        duration: 5
    },
]

const renderObjective = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[40px]">
            {objective.map((item, i) => (
                <div
                    key={`obj-${i}`}
                    className='flex gap-5 bg-white py-5 px-2 rounded-[8px]'
                >
                    <img
                        src={item.icon} alt=''
                        className='h-10 w-10'
                    />
                    <div className='space-y-2'>
                        <span className='font-[700] text-black'>{item.title}</span>
                        <p className='text-gray-400 leading-5 text-[18px]'>{item.detail}</p>
                        <button className='border border-[#144f9a] rounded-[8px] text-[#144f9a] px-2 py-1 mt-2 font-[600] text-[16px]'>Get Started</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

const renderSuccess = () => {
    return (
        <div className='grid  grid-cols-1 sm:grid-cols-2 space-y-2 sm:space-x-2'>
            {
                success.map((item, i) => (
                    <div
                        key={`suc-${i}`}
                        className='bg-[#ededed] p-5 rounded-[8px]'
                    >
                        <div className='flex gap-5'>
                            <img src={item.icon} alt='' />
                            <div className='grid -space-y-4'>
                                <span className='text-[#144f9a] font-[700]'>{item.name}</span>
                                <span className='text-[14px] text-gray-400'>{item.title}</span>
                            </div>
                        </div>
                        <div className='grid mt-4 text-[13px] leading-4 text-gray-500 mb-4'>"{item.desc}"</div>
                        <div className='grid text-[#226a2b] text-[12px] font-[600]'>
                            <span>{item.sal}% Salary Increase</span>
                            <span>{item.duration} Week Job Search</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

function Fouth() {
    return (
        <div className='my-4 '>
            <div className='bg-[#ededed] py-[20px] px-[12px]'>
                <div className='mx-5'>
                    <span className='font-[400] text-[32px] text-[#144f9a]'>Why Choose FXTownhall</span>
                    <p className='text-[#1a1a1a] text-[22px] font-[700]'>Go beyond traditional hiring. Make decisions based on real performance data and cultural fit.</p>
                </div>
                <div>
                    {renderObjective()}
                </div>
            </div>
            <div className='grid mt-7'>
                <div className='flex flex-col items-center justify-center my-4'>
                    <span className='text-[#144f9a] text-[32px]'>Success Stories</span>
                    <span className='text-center font-[700] text-[22px] max-w-[85%]'>Real results from sales professionals and brokers who've transformed their careers and teams</span>
                </div>
                <div className='px-5'>
                    {renderSuccess()}
                </div>
            </div>
        </div>
    )
}

export default Fouth
