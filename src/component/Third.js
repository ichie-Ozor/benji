import React from 'react'
import badge from '../assets/badge.png'
import bbadge from '../assets/blue-badge.png'

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
            amt: 5,
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
            amt: 1.5,
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
            amt: 2.2,
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
            amt: 4.1,
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
            amt: 3.9,
            number: 234
        }
    }
]

const professionals = [
    {
        name: "Uche Ugwuoke",
        title: "Business Development Manager",
        experience: 8,
        location: "Abuja",
        rating: [
            {
                avg: 300000,
                desc: "Avg Monthly Money in"
            },
            {
                percentage: 89,
                detail: "Cold Lead Closing Rate"
            },
            {
                target: 95,
                desc: "avg Monthly Target"
            },
            {
                retention: 60,
                purpose: "retention Rate"
            }
        ],
        features: ["Lead Conversation", "Retention", "Business Development"],
        reviews: {
            amt: 3.9,
            number: 420
        }
    },
    {
        name: "Uche Ugwuoke",
        title: "Business Development Manager",
        experience: 8,
        location: "Abuja",
        rating: [
            {
                avg: 300000,
                desc: "Avg Monthly Money in"
            },
            {
                percentage: 89,
                detail: "Cold Lead Closing Rate"
            },
            {
                target: 95,
                desc: "avg Monthly Target"
            },
            {
                retention: 60,
                purpose: "retention Rate"
            }
        ],
        features: ["Lead Conversation", "Retention", "Business Development"],
        reviews: {
            amt: 3.9,
            number: 420
        }
    },
    {
        name: "Uche Ugwuoke",
        title: "Business Development Manager",
        experience: 8,
        location: "Abuja",
        rating: [
            {
                avg: 300000,
                desc: "Avg Monthly Money in"
            },
            {
                percentage: 89,
                detail: "Cold Lead Closing Rate"
            },
            {
                target: 95,
                desc: "avg Monthly Target"
            },
            {
                retention: 60,
                purpose: "retention Rate"
            }
        ],
        features: ["Lead Conversation", "Retention", "Business Development"],
        reviews: {
            amt: 3.9,
            number: 420
        }
    },
    {
        name: "Uche Ugwuoke",
        title: "Business Development Manager",
        experience: 8,
        location: "Abuja",
        rating: [
            {
                avg: 300000,
                desc: "Avg Monthly Money in"
            },
            {
                percentage: 89,
                detail: "Cold Lead Closing Rate"
            },
            {
                target: 95,
                desc: "avg Monthly Target"
            },
            {
                retention: 60,
                purpose: "retention Rate"
            }
        ],
        features: ["Lead Conversation", "Retention", "Business Development"],
        reviews: {
            amt: 3.9,
            number: 420
        }
    },
    {
        name: "Uche Ugwuoke",
        title: "Business Development Manager",
        experience: 8,
        location: "Abuja",
        rating: [
            {
                avg: 300000,
                desc: "Avg Monthly Money in"
            },
            {
                percentage: 89,
                detail: "Cold Lead Closing Rate"
            },
            {
                target: 95,
                desc: "avg Monthly Target"
            },
            {
                retention: 60,
                purpose: "retention Rate"
            }
        ],
        features: ["Lead Conversation", "Retention", "Business Development"],
        reviews: {
            amt: 3.9,
            number: 420
        }
    },
    {
        name: "Uche Ugwuoke",
        title: "Business Development Manager",
        experience: 8,
        location: "Abuja",
        rating: [
            {
                avg: 300000,
                desc: "Avg Monthly Money in"
            },
            {
                percentage: 89,
                detail: "Cold Lead Closing Rate"
            },
            {
                target: 95,
                desc: "avg Monthly Target"
            },
            {
                retention: 60,
                purpose: "retention Rate"
            }
        ],
        features: ["Lead Conversation", "Retention", "Business Development"],
        reviews: {
            amt: 3.9,
            number: 420
        }
    },
]

const ReviewStars = ({ rating, number }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center">
            {console.log(fullStars, "dd", [...Array(fullStars)])}
            {[...Array(fullStars)].map((_, i) => (
                <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}

            {hasHalfStar && (
                <svg key="half" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <defs>
                        <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="50%" stopColor="gray" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#half-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            )}

            {[...Array(emptyStars)].map((_, i) => (
                <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}

            <span className="ml-1 text-sm text-gray-600">
                ({rating.toFixed(1)} · {number} reviews)
            </span>
        </div>
    );
};

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
                            <div className="space-y-2  sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-2">
                                {item.rating.map((t, index) => (
                                    <div key={index} className="grid justify-center items-center pl-3 py-1 w-full bg-[#ededed]">
                                        {t.score && (
                                            <div className='grid place-items-center'>
                                                <div className="text-lg font-bold text-center">{t.score}</div>
                                                <div className="text-sm text-gray-600 text-center">{t.title}</div>
                                            </div>
                                        )}
                                        {t.amt && (
                                            <div className='grid place-items-center'>
                                                <div className="text-lg font-bold text-center">{t.amt}</div>
                                                <div className="text-sm text-gray-600">{t.detail}</div>
                                            </div>
                                        )}
                                        {t.size && (
                                            <div className='grid place-items-center'>
                                                <div className="text-lg font-bold text-center">{t.size}</div>
                                                <div className="text-sm text-gray-600">{t.detail}</div>
                                            </div>
                                        )}
                                        {t.percent && (
                                            <div className='grid place-items-center'>
                                                <div className="text-lg font-bold text-center">{t.percent}%</div>
                                                <div className="text-sm text-gray-600">{t.detail}</div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className='mt-2 sm:mt-4 space-x-2'>
                                {item.features.map((t, i) => (
                                    <span
                                        key={`feat-${i}`}
                                        className='bg-[#ededed] text-[10px] sm:text-[14px] py-2 px-2 rounded-[15px]'
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div>
                                {item.reviews && (
                                    <div className="mt-3">
                                        <ReviewStars rating={item.reviews.amt} number={item.reviews.number} />
                                    </div>
                                )}
                            </div>
                            <button className='w-full bg-[#144f9a] rounded-[8px] text-white text-[14px] py-2'>View Company Culture</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

const renderProfessionals = () => {
    return (
        professionals.map((item, i) => (
            <div key={i}
                className='bg-white py-3 px-2 rounded-[8px] border-l-4 border-l-[#144f9a] mb-2'
            >
                <div className='flex gap-4 w-full'>
                    <div className='w-[44px] h-[44px] rounded-[8px] border-2 border-[#cfcfcf] bg-[#ededed] py-4 px-2 flex justify-center items-center'>
                        <span className='font-[500] text-[14px] text-[#2a2a2a]'>{item.name.split(' ').map((word) => word.charAt(0)).join('')}</span>
                    </div>
                    <div className='w-[70%] flex flex-col justify-center items-start ml-4 mb-3'>
                        <span className='font-[700] text-[18px] text-[#144f9a]'>{item.name}</span>
                        <div className='flex flex-wrap gap-1 text-gray-500 text-[14px] leading-3'>
                            <div>
                                {item.title}
                            </div>
                            <span className='whitespace-nowrap leading-3 mt-1'>•</span>
                            <div>{item.experience} Years Experience</div>
                            <span>–{item.location}</span>
                        </div>
                    </div>
                    <div className='w-[20%]'>
                        <span className='flex justify-center items-center text-[13px] w-7 h-7 float-right text-white rounded-full bg-[#144f9a]'>{i + 1}</span>
                    </div>
                </div>
                <div className="space-y-2  sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-2">
                    {item.rating.map((t, index) => (
                        <div key={index} className="grid justify-center items-center pl-3 py-1 w-full bg-[#ededed]">
                            {t.avg && (
                                <div className='grid place-items-center'>
                                    <div className="text-lg font-bold text-center">${t.avg}</div>
                                    <div className="text-sm text-gray-600 text-center">{t.desc}</div>
                                </div>
                            )}
                            {t.percentage && (
                                <div className='grid place-items-center'>
                                    <div className="text-lg font-bold text-center">{t.percentage}%</div>
                                    <div className="text-sm text-gray-600">{t.detail}</div>
                                </div>
                            )}
                            {t.target && (
                                <div className='grid place-items-center'>
                                    <div className="text-lg font-bold text-center">{t.target}%</div>
                                    <div className="text-sm text-gray-600">{t.desc}</div>
                                </div>
                            )}
                            {t.retention && (
                                <div className='grid place-items-center'>
                                    <div className="text-lg font-bold text-center">{t.retention}%</div>
                                    <div className="text-sm text-gray-600">{t.purpose}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='mt-2 sm:mt-4 space-x-2'>
                    {item.features.map((t, i) => (
                        <span
                            key={`feat-${i}`}
                            className='bg-[#ededed] text-[10px] sm:text-[14px] py-2 px-2 rounded-[15px]'
                        >
                            {t}
                        </span>
                    ))}
                </div>
                <div>
                    {item.reviews && (
                        <div className="mt-3">
                            <ReviewStars rating={item.reviews.amt} number={item.reviews.number} />
                        </div>
                    )}
                </div>
                <button className='w-full bg-[#144f9a] rounded-[8px] text-white text-[14px] py-2'>Connect & Hire</button>
            </div>
        ))
    )
}


function Third() {
    return (
        <div className='bg-[#ededed] py-[35px] px-[12px]'>
            <div>
                <span className='text-[#144f9a] text-[28px] sm:text-[22px] font-[400] sm:font-[700]'>Top Performers</span>
                <p className='text-[18px] sm:text-[14px] text-[#3f3f3f] font-[700] sm:font-[500]'>Discover the highest-rated broker and sales professional in our marketplace</p>
            </div>
            <div className='grid md:grid-cols-2 w-full'>
                <div className='col-span-1'>
                    <div className='flex gap-2 mt-4 justify-start border border-b-gray-300 pb-2 mb-4'>
                        <img src={badge} alt='' className='w-5 h-5 mt-[4px]' />
                        <span className='text-[#226a28] text-[18px] font-[700] '>Top Brokers</span>
                    </div>
                    <div className=''>
                        {renderCompany()}
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className='flex gap-2 mt-4 justify-start border border-b-gray-300 pb-2 mb-4'>
                        <img src={bbadge} alt='' className='w-5 h-5 mt-[4px]' />
                        <span className='text-[#144f9a] text-[18px] font-[700] '>Top Sales Professionals</span>
                    </div>
                    <div className=''>
                        {renderProfessionals()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Third
