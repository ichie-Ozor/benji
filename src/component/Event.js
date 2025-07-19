// import React, { useState } from 'react'

// function Event() {
//     const [event, setEvent] = useState({
//         event: "",
//         date: "",
//         religion: "",
//         message: ""
//     })

//     const oneventChangeHandler = () => { }

//     const handleSubmit = () => { }
//     // const client = ["all", "christian", "muslim"]
//     return (
//         <div className='flex bg-[#161604] min-h-[83vh] relative justify-center items-center'>
//             <div className='relative flex flex-col min-h-[65vh] pt-10 mr-5 bg-opacity-80 z-10'>
//                 <h1 className='text-[#FFD700] font-bold'>Create Event Message</h1>
//                 <form
//                     className="max-w-[450px] w-full px-5 mx-4 my-4 border-white border-2 py-4 rounded-lg text-white"
//                     onSubmit={handleSubmit}
//                 >
//                     {/* <div>
//                         <label>Set Recipient</label>
//                         <input
//                             placeholder="Enter customer's Name Here"
//                             type='text'
//                             className="rounded-[5px] shadow bg-white text-black border-[0.8px] border-[#ececef] text-[12px] px-2 py-2 w-full font-bold"
//                             onChange={(e) => { setRecipient(e.target.value) }}
//                             value={recipient}
//                         />
//                         <div className='relative'>
//                             {client.filter(item => {
//                                 const searchItem = recipient.toLowerCase()
//                                 const enteredName = item.toLowerCase()
//                                 return searchItem && enteredName.startsWith(searchItem) && enteredName !== searchItem
//                             }).slice(0, 10).map((item, index) =>
//                                 <div
//                                     onClick={() => setRecipient(item)}
//                                     key={index}
//                                     className='absolute top-[100%] left-0 rounded bg-gray-300 w-full text-black font-bold border-[#ffd700] border-[0.5px] hover:gray-400 flex justify-self-center items-center py-1 px-2 mb-1'
//                                     style={{ top: `${index * 40}px` }}

//                                 >{item}</div>
//                             )}
//                         </div>
//                     </div> */}
//                     <div>
//                         <label>Set Event</label>
//                         <input
//                             placeholder="Enter Event Here"
//                             type='text'
//                             className="rounded-[5px] shadow bg-white text-black border-[0.8px] border-[#ececef] text-[12px] px-2 py-2 w-full font-bold"
//                             value={event.event}
//                             name='event'
//                             onChange={oneventChangeHandler}
//                         />
//                         {/* <select className="rounded-[5px] shadow bg-white text-black border-[0.8px] border-[#ececef] text-[12px] px-2 py-2 w-full font-bold"
//                         >
//                             <option>---Select Event---</option>
//                             <option>Christmas</option>
//                             <option>Sallah</option>
//                             <option>New year</option>
//                         </select> */}
//                     </div>
//                     <div>
//                         <label>Set Date</label>
//                         <input
//                             type='date'
//                             className="rounded-[5px] shadow bg-white text-black border-[0.8px] border-[#ececef] text-[12px] px-2 py-2 w-full font-bold"
//                             value={event.date}
//                             name='date'
//                             onChange={oneventChangeHandler}
//                         />
//                     </div>
//                     <div>
//                         <label>Religion</label>
//                         <input
//                             type='religion'
//                             className="rounded-[5px] shadow bg-white text-black border-[0.8px] border-[#ececef] text-[12px] px-2 py-2 w-full font-bold"
//                             value={event.religion}
//                             name='religion'
//                             onChange={oneventChangeHandler}
//                         />
//                     </div>
//                     <div>
//                         <label>Set Message</label>
//                         <textarea
//                             row="6"
//                             placeholder='Enter Message Here'
//                             className="rounded-[5px] shadow bg-white text-black border-[0.8px] border-[#ececef] text-[16px] px-2 py-2 w-full font-bold overflow-hidden"
//                             onChange={(e) => {
//                                 oneventChangeHandler;
//                                 e.target.style.height = "auto";
//                                 e.target.style.height = `${e.target.scrollHeight}px`;
//                             }}
//                             value={event.message}
//                             name='message'
//                         />
//                     </div>
//                     <button className='rounded-[5px] border-[0.5px] border-gray-300 w-full hover:bg-[#ffd700]/30 hover:duration-700' type='submit'>Submit</button>
//                     <button className='rounded-[5px] border-[0.5px] border-gray-300 w-full hover:bg-[#ffd700]/30 hover:duration-700 mt-1'>Edit</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Event


import React, { useState } from 'react';
import { postApi } from '../util/helper';

function Event() {
    const [event, setEvent] = useState({
        event: "",
        date: "",
        religion: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!event.event.trim()) newErrors.event = "Event is required";
        if (!event.date) newErrors.date = "Date is required";
        if (!event.religion.trim()) newErrors.religion = "Religion is required";
        if (!event.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            console.log("Submitting event:", event);
            postApi("/event", event, (res) => console.log(res, "success"), (err) => console.log(err, "error"), () => console.log("result is empty"))


            setTimeout(() => {
                setIsSubmitting(false);
                alert("Event created successfully!");
                setEvent({
                    event: "",
                    date: "",
                    religion: "",
                    message: ""
                });
            }, 1000);
        }
    };

    const handleTextareaResize = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

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
                <h1 className='text-[#FFD700] font-bold text-xl mb-4'>Create Event Message</h1>
                <form
                    className="max-w-[450px] w-full px-5 mx-4 my-4 border-white border-2 py-4 rounded-lg text-white"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label className="block mb-1">Set Event</label>
                        <input
                            placeholder="Enter Event Here"
                            type='text'
                            className={`rounded-[5px] shadow bg-white text-black border-[0.8px] border-[#ececef] text-[12px] px-2 py-2 w-full font-bold ${errors.event ? "border-red-500" : ""
                                }`}
                            value={event.event}
                            name='event'
                            onChange={handleChange}
                        />
                        {errors.event && (
                            <p className="text-red-500 text-xs mt-1">{errors.event}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1">Set Date</label>
                        <input
                            type='date'
                            className={`rounded-[5px] shadow bg-white text-black border-[0.8px] border-[#ececef] text-[12px] px-2 py-2 w-full font-bold ${errors.date ? "border-red-500" : ""
                                }`}
                            value={event.date}
                            name='date'
                            onChange={handleChange}
                        />
                        {errors.date && (
                            <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1">Religion</label>
                        <select
                            className={`rounded-[5px] shadow bg-white text-black border-[0.8px] border-[#ececef] text-[12px] px-2 py-2 w-full font-bold ${errors.religion ? "border-red-500" : ""
                                }`}
                            value={event.religion}
                            name='religion'
                            onChange={handleChange}
                        >
                            <option value="">---Select Religion---</option>
                            <option value="Christian">Christian</option>
                            <option value="Muslim">Muslim</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.religion && (
                            <p className="text-red-500 text-xs mt-1">{errors.religion}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1">Set Message</label>
                        <textarea
                            rows="4"
                            placeholder='Enter Message Here'
                            className={`rounded-[5px] shadow bg-white text-black border-[0.8px] border-[#ececef] text-[16px] px-2 py-2 w-full font-bold overflow-hidden ${errors.message ? "border-red-500" : ""
                                }`}
                            onChange={(e) => {
                                handleChange(e);
                                handleTextareaResize(e);
                            }}
                            value={event.message}
                            name='message'
                        />
                        {errors.message && (
                            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                        )}
                    </div>

                    <button
                        // className='rounded-[5px] border-[0.5px] border-gray-300 w-full hover:bg-[#ffd700]/30 hover:duration-700 py-2 font-bold bg-[#FFD700] text-black'
                        className='rounded-[5px] border-[0.5px] border-gray-300 w-full hover:bg-[#ffd700]/30 hover:duration-700'
                        type='submit'
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Event;