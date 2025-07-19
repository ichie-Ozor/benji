import React, { useState } from 'react'
import bikeVideo from "../assets/bike.mp4"
import { postApi } from '../util/helper'

function CreateBio() {
    const [bio, setBio] = useState({
        name: "",
        number: "",
        address: "",
        state: "",
        email: "",
        country: "",
        religion: '',
        birthday: "",
        wedanniversary: ""
    })

    const bioHandler = (e) => {
        const { name, value } = e.target
        setBio({ ...bio, [name]: value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(bio, "submitted")
        postApi("/customer", bio, (res) => console.log(res, "success"), (err) => console.log(err, "error"), () => console.log("result is empty"))

        setBio({
            name: "",
            number: "",
            address: "",
            state: "",
            email: "",
            country: "",
            religion: '',
            birthday: "",
            wedanniversary: ""
        })
    }

    return (
        // <div className='relative flex bg-[#000066] border-t-2 border-red-800 min-h-[83vh] justify-center items-center overflow-hidden'>
        <div className='relative flex border-t-2 bg-[#978480] border-red-800 min-h-[83vh] justify-center items-center overflow-hidden'>
            <video
                src={bikeVideo}
                autoPlay
                loop
                preload="metadata"
                className='absolute h-full w-full top-0 left-0 object-cover z-10'
            />
            <div className='relative flex flex-col min-h-[65vh] pt-10 mr-5 bg-opacity-80 z-10'>
                <h1 className='text-white font-bold'>Create Customer Bio Data</h1>
                <form className="max-w-[450px] w-full px-5 mx-4 my-4 border-white border-2 py-4 rounded-lg text-white" onSubmit={submitHandler}>
                    {[
                        { label: 'Name', name: 'name', placeholder: 'Enter Here', type: 'text' },
                        { label: 'Phone Number', name: 'number', placeholder: 'Enter Phone Number', type: 'text' },
                        { label: 'Address', name: 'address', placeholder: 'Enter Address', type: 'text' },
                        { label: 'State', name: 'state', placeholder: 'Enter State' },
                        { label: 'Email', name: 'email', placeholder: 'Enter email here', type: 'email' },
                        { label: 'Country', name: 'country', placeholder: 'Enter Country Here', type: 'text' },
                        { label: 'Religion', name: 'religion', placeholder: 'Enter Religion Here', type: 'text' },
                        { label: 'Date of Birth', name: 'birthday', placeholder: 'Enter DOB', type: 'date' },
                        { label: 'Wedding Anniversary', name: 'wedanniversary', placeholder: 'Enter Anniversary Here', type: 'date' }
                    ].map((field, index) => (
                        <div key={index} className='mb-4'>
                            <label>{field.label}</label>
                            <input
                                className='rounded-[5px] text-[#FFD700] shadow bg-transparent border-[0.8px] boder-pink-500 text-[12px] px-2 py-2 w-full'
                                placeholder={field.placeholder}
                                type={field.type}
                                name={field.name}
                                value={bio[field.name]}
                                onChange={bioHandler}
                            />
                        </div>
                    ))}
                    <button className='w-full hover:text-[black] hover:border hover:border-[#00ff08] rounded font-bold'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateBio
