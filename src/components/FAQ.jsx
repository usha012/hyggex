import React, { useState } from 'react'

const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const items = [
        {title: "Can education flashcards be used for all age groups?"},
        {title: "How do education flashcards work?"},
        {title: "Can education flashcards be used for test preparation?"}
    ]


    return (
        <div className="container flex justify-center my-[7rem]">
            <div className="w-11/12 md:w-5/6">
                <div className="">
                    <h3 className="font-[Inter] font-[700] text-[48px] text-gradient-1 mb-6">FAQ</h3>

                    <div className="w-full md:w-3/4">
                    {
                        items.map((item, index) => (
                            <div key={index} className="mb-[2rem] relative" >
                                <button onClick={() => toggleAccordion(index)} className="rounded-[12px] border border-[#217EEC] w-full text-left ps-6 pe-10 py-4 font-[Inter] font-[600]">
                                    {item.title}
                                </button>
                                <svg  onClick={() => toggleAccordion(index)} className={`cursor-pointer dropdown-icon absolute top-[17px] right-[24px] ${activeIndex === index ? "rotated" : ""}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.855 7.49599C4.91074 7.44006 4.97698 7.39567 5.04991 7.36539C5.12284 7.33511 5.20103 7.31952 5.28 7.31952C5.35897 7.31952 5.43716 7.33511 5.51009 7.36539C5.58302 7.39567 5.64926 7.44006 5.705 7.49599L12.48 14.272L19.255 7.49599C19.3677 7.38328 19.5206 7.31995 19.68 7.31995C19.8394 7.31995 19.9923 7.38328 20.105 7.49599C20.2177 7.60871 20.281 7.76159 20.281 7.92099C20.281 8.0804 20.2177 8.23328 20.105 8.34599L12.905 15.546C12.8493 15.6019 12.783 15.6463 12.7101 15.6766C12.6372 15.7069 12.559 15.7225 12.48 15.7225C12.401 15.7225 12.3228 15.7069 12.2499 15.6766C12.177 15.6463 12.1107 15.6019 12.055 15.546L4.855 8.34599C4.79907 8.29025 4.75468 8.22401 4.7244 8.15108C4.69412 8.07815 4.67853 7.99996 4.67853 7.92099C4.67853 7.84202 4.69412 7.76383 4.7244 7.6909C4.75468 7.61797 4.79907 7.55173 4.855 7.49599Z" fill="#28262C"/>
                                </svg>
                                {
                                    activeIndex === index 
                                    ? 
                                    <div className="p-4 rounded-[12px] bg-slate-200">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                    </div>
                                    :
                                    ""
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
