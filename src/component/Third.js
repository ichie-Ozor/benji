import React from 'react'
import badge from '../assets/badge.png'

const brokers = [
    {
        title: "Man United Forex",
        details: ["CFDs", "Crypto", "Metals", "Stocks"],
        locations: ["Lagos", "Abuja", "Kumasi"],
        rating: [
            {
                score: 4.9,
                title: "Culture Score"
            },
            {
                amt: "$2.3M",
                detail: "AVG Deal Size"
            },
            {
                size: 127,
                detail: "Team Size"
            },
            {
                percent: 98,
                detail: "Rentention Rate"
            }
        ],
        features: ["Remote-First", "High Commission", "Growth Stage"],
        reviews: {
            amt: 4.9,
            number: 234
        }
    },
    {
        title: "Swansea Forex",
        details: ["CFDs", "Crypto", "Metals", "Stocks"],
        locations: ["Lagos", "Abuja", "Kumasi"],
        rating: [
            {
                score: 4.9,
                title: "Culture Score"
            },
            {
                amt: "$2.3M",
                detail: "AVG Deal Size"
            },
            {
                size: 127,
                detail: "Team Size"
            },
            {
                percent: 98,
                detail: "Rentention Rate"
            }
        ],
        features: ["Remote-First", "High Commission", "Growth Stage"],
        reviews: {
            amt: 4.9,
            number: 234
        }
    },
    {
        title: "Aston Villa Forex",
        details: ["CFDs", "Crypto", "Metals", "Stocks"],
        locations: ["Lagos", "Abuja", "Kumasi"],
        rating: [
            {
                score: 4.9,
                title: "Culture Score"
            },
            {
                amt: "$2.3M",
                detail: "AVG Deal Size"
            },
            {
                size: 127,
                detail: "Team Size"
            },
            {
                percent: 98,
                detail: "Rentention Rate"
            }
        ],
        features: ["Remote-First", "High Commission", "Growth Stage"],
        reviews: {
            amt: 4.9,
            number: 234
        }
    },
    {
        title: "Liverpool Forex Company",
        details: ["CFDs", "Crypto", "Metals", "Stocks"],
        locations: ["Lagos", "Abuja", "Kumasi"],
        rating: [
            {
                score: 4.9,
                title: "Culture Score"
            },
            {
                amt: "$2.3M",
                detail: "AVG Deal Size"
            },
            {
                size: 127,
                detail: "Team Size"
            },
            {
                percent: 98,
                detail: "Rentention Rate"
            }
        ],
        features: ["Remote-First", "High Commission", "Growth Stage"],
        reviews: {
            amt: 4.9,
            number: 234
        }
    },
    {
        title: "Chelsea Forex",
        details: ["CFDs", "Crypto", "Metals", "Stocks"],
        locations: ["Lagos", "Abuja", "Kumasi"],
        rating: [
            {
                score: 4.9,
                title: "Culture Score"
            },
            {
                amt: "$2.3M",
                detail: "AVG Deal Size"
            },
            {
                size: 127,
                detail: "Team Size"
            },
            {
                percent: 98,
                detail: "Rentention Rate"
            }
        ],
        features: ["Remote-First", "High Commission", "Growth Stage"],
        reviews: {
            amt: 4.9,
            number: 234
        }
    }
]

const renderCompany = () => {
    return (
        <div>
            {
                brokers.map((item, i) => {
                    return (
                        <div key={i}
                            className='bg-white py-3 px-2 rounded-[8px] border-l-4 border-l-[#144f9a] mb-2'
                        >
                            <div className='flex gap-4 w-full'>
                                <div className='w-[44px] h-[44px] rounded-[8px] border-2 border-[#cfcfcf] bg-[#ededed] py-4 px-2 flex justify-center items-center'>
                                    <span className='font-[500] text-[14px] text-[#2a2a2a]'>{item.title.split(' ').map((word) => word.charAt(0)).join('')}</span>
                                </div>
                                <div className='w-[70%] flex flex-col justify-center items-start ml-4 mb-3'>
                                    <span className='font-[700] text-[18px] text-[#144f9a]'>{item.title}</span>
                                    <div className='flex flex-wrap gap-1 text-gray-500'>
                                        {item.details.map((t, i) => (
                                            <span key={`detail-${i}`} className='whitespace-nowrap text-[13px] leading-3'>{t}{i !== item.details.length - 1 && ','}</span>
                                        ))}
                                        <span className='whitespace-nowrap leading-3'>•</span>
                                        {item.locations.map((l, i) => (
                                            <span key={`loc-${i}`} className='whitespace-nowrap text-[13px] leading-3'>
                                                {l}{i !== item.locations.length - 1 && ','}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className='w-[20%]'>
                                    <span className='flex justify-center items-center text-[13px] w-6 h-6 float-right text-white rounded-full bg-[#226a28]'>{i + 1}</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                {item.rating.map((t, index) => (
                                    <div key={index} className="grid justify-center items-center pl-3 py-1 w-full bg-[#ededed]">
                                        {t.score && (
                                            <div className='grid place-items-center h-full'>
                                                <div className="text-lg font-bold text-center">{t.score}</div>
                                                <div className="text-sm text-gray-600 text-center">{t.title}</div>
                                            </div>
                                        )}
                                        {t.amt && (
                                            <div className='grid place-items-center h-full'>
                                                <div className="text-lg font-bold text-center">{t.amt}</div>
                                                <div className="text-sm text-gray-600">{t.detail}</div>
                                            </div>
                                        )}
                                        {t.size && (
                                            <div className='grid place-items-center h-full'>
                                                <div className="text-lg font-bold text-center">{t.size}</div>
                                                <div className="text-sm text-gray-600">{t.detail}</div>
                                            </div>
                                        )}
                                        {t.percent && (
                                            <div className='grid place-items-center h-full'>
                                                <div className="text-lg font-bold text-center">{t.percent}%</div>
                                                <div className="text-sm text-gray-600">{t.detail}</div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            {/* <div className="space-y-2">
                                {item.rating.map((t, index) => (
                                    <div
                                        key={index}
                                        className="group bg-[#ededed] w-full pl-3 py-1"
                                    >
                                        <div className="grid place-items-center group-hover:bg-[#ededed]">
                                            <div className="text-lg font-bold text-center">
                                                {t.score || t.amt || t.size || t.percent}
                                                {t.percent && "%"}
                                            </div>
                                            <div className="text-sm text-gray-600 text-center">
                                                {t.title || t.detail}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    )
                })
            }
        </div>
    )
}
function Third() {
    return (
        <div className='bg-[#ededed] py-[35px] px-[12px]'>
            <div>
                <span className='text-[#144f9a] text-[28px] sm:text-[22px] font-[400] sm:font-[700]'>Top Performers</span>
                <p className='text-[18px] sm:text-[14px] text-[#3f3f3f] font-[700] sm:font-[500]'>Discover the highest-rated broker and sales professional in our marketplace</p>
            </div>
            <div>
                <div className='flex gap-2 mt-4 justify-start border border-b-gray-300 pb-2 mb-4'>
                    <img src={badge} alt='' className='w-5 h-5 mt-[4px]' />
                    <span className='text-[#226a28] text-[18px] font-[700] '>Top Brokers</span>
                </div>
                <div className=''></div>
                {renderCompany()}
            </div>
        </div>
    )
}

export default Third
