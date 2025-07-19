import React, { useEffect, useState } from 'react'
import { getApi, postApi } from '../util/helper'


function Manual() {
    const [nameInput, setNameInput] = useState("")
    const [message, setMessage] = useState("")
    const [names, setNames] = useState([])
    const [onSubmitType, setOnSubmitType] = useState("")

    useEffect(() => {
        getApi("/customer/", (resp) => setNames(resp.data.customers), (err) => console.log(err, "error"), () => console.log("empty object"))
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            name: nameInput,
            message
        }
        if (message === "" || nameInput === "") {
            console.log("please fill in the space")
            return
        } else if (onSubmitType === "sms") {
            console.log(message, "sms clicked", nameInput, data)
            postApi("/manual/sms", data, (resp) => console.log(resp, "response"), (err) => console.log(err, "error"), (f) => console.log(f, "this is empty"))
        } else {
            console.log(message, "email clicked", data)
            postApi("/manual/email", data, (resp) => console.log(resp, "response"), (err) => console.log(err, "error"), (f) => console.log(f, "this is empty"))

        }
        setNameInput("")
        setMessage("")
        setOnSubmitType("")
    }

    // console.log(nameInput, "nannnn", message)aaae7f, 414c18, 30150c, a47963, 170108, 011617, 666666, b7b7b7
    return (
        <div className='flex bg-[#161604] min-h-[83vh] relative justify-center items-center'>
            <div className='containerBody grid justify-between'>
                <div class='d'></div>
                <div class='f'></div>
                <div class='g'></div>
                <div class='e'></div>
                <div class='h'></div>
                <div class='i'></div>
                <div class='j'></div>
                <div class='k'></div>
            </div>
            <div className='relative flex flex-col min-h-[65vh] pt-10 mr-5 bg-opacity-80 z-10'>
                <h1 className='text-[#FFD700] font-bold'>Create Manual Message</h1>
                <form
                    className="max-w-[450px] w-full px-5 mx-4 my-4 border-white border-2 py-4 rounded-lg text-white bg-[#aaae7f]"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label>Customer's Name</label>
                        <input
                            placeholder="Enter customer's Name Here"
                            type='text'
                            className="rounded-[5px] shadow text-white border-[0.8px] border-[#ececef] text-[12px] px-2 py-2 w-full font-bold bg-[#161604]"
                            onChange={(e) => { setNameInput(e.target.value) }}
                            value={nameInput}
                        />
                        <div className='relative'>
                            {names.filter(item => {
                                const searchItem = nameInput.toLowerCase()
                                const enteredName = item.name.toLowerCase()
                                return searchItem && enteredName.startsWith(searchItem) && enteredName !== searchItem
                            }).slice(0, 10).map((item, index) =>
                                <div
                                    onClick={() => setNameInput(item.name)}
                                    key={index}
                                    className='absolute top-[100%] left-0 rounded bg-gray-300 w-full text-black font-bold border-[#ffd700] border-[0.5px] hover:gray-400 flex justify-self-center items-center py-1 px-2 mb-1'
                                    style={{ top: `${index * 40}px` }}

                                >{item.name}</div>
                            )}
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label>Enter Message</label>
                        <textarea
                            row="6"
                            placeholder='Enter Message Here'
                            className="rounded-[5px] shadow bg-[#161604] text-white border-[0.8px] border-[#ececef] text-[16px] px-2 py-2 w-full font-bold overflow-hidden"
                            onChange={(e) => {
                                setMessage(e.target.value)
                                e.target.style.height = "auto";
                                e.target.style.height = `${e.target.scrollHeight}px`;
                            }}
                            value={message}
                            name='message'
                        />
                    </div>
                    <div className='flex mt-2 space-x-1'>
                        <button
                            className='rounded-[5px] border-[0.5px] border-gray-300 w-1/2 bg-[#ffd700] hover:bg-[#ffd700]/30 hover:duration-700 text-[#161604] font-bold'
                            type='submit'
                            onClick={() => setOnSubmitType("sms")}
                        >SMS</button>
                        <button
                            className='rounded-[5px] border-[0.5px] bg-[#ffd700] border-gray-300 w-1/2 hover:bg-[#ffd700]/30 hover:duration-700 text-[#161604] font-bold'
                            onClick={() => setOnSubmitType('email')}
                        >Email</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Manual
