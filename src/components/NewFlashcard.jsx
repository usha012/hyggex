import React from 'react'
import LogoLarge from "../images/logo_large.png"

const NewFlashcard = () => {
    return (
        <div className="container flex justify-center mt-[4rem]">
            <div className="w-5/6">
                <div className="flex  flex-col md:flex-row justify-end items-center relative">

                    <img src={LogoLarge} className="relative md:absolute left-[-30px]" />

                    <span className="font-[Inter] font-[700] text-gradient-1 text-[28px] flex items-center cursor-pointer">
                        <svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <path d="M25.0001 -0.00019455C11.2001 -0.00019455 9.15527e-05 11.1998 9.15527e-05 24.9998C9.15527e-05 38.7998 11.2001 49.9998 25.0001 49.9998C38.8001 49.9998 50.0001 38.7998 50.0001 24.9998C50.0001 11.1998 38.8001 -0.00019455 25.0001 -0.00019455ZM37.5001 27.4998H27.5001V37.4998H22.5001V27.4998H12.5001V22.4998H22.5001V12.4998H27.5001V22.4998H37.5001V27.4998Z" fill="url(#paint0_linear_1_203)"/>
                            <defs>
                            <linearGradient id="paint0_linear_1_203" x1="25.0001" y1="-0.00019455" x2="25.0001" y2="49.9998" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#06286E"/>
                            <stop offset="1" stop-color="#164EC0"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        Create Flashcard
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NewFlashcard
