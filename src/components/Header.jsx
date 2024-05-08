import React, { useState } from 'react'
import Logo from  "../images/logo.png"

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className="container flex justify-center mt-6">
            <div className="w-11/12 md:w-5/6">
                <div className="flex justify-between">
                    <img src={Logo} alt="hyggex" className="w-[191px] h-[39px] cursor-pointer"/>

                    <ul className="list-none lg:flex hidden">
                        <li className="cursor-pointer py-2 me-[50px] text-[18px] text-[#3A3740] hover:text-[#000]">Home</li>
                        <li className="cursor-pointer py-2 me-[50px] text-[18px] text-[#3A3740] hover:text-[#000]">Flashcard</li>
                        <li className="cursor-pointer py-2 me-[50px] text-[18px] text-[#3A3740] hover:text-[#000]">Contact</li>
                        <li className="cursor-pointer py-2 me-[50px] text-[18px] text-[#3A3740] hover:text-[#000]">FAQ</li>
                        <li className="cursor-pointer">
                            <button className="py-2 text-[18px] w-[128px]  text-[#fff] rounded-full bg-gradient-to-b from-[#06286E] to-[#164EC0]">Login</button>
                        </li>
                    </ul>
                    
                    <span className="relative flex lg:hidden">
                        <svg className={`cursor-pointer toggleMenu absolute right-0 inline lg:hidden ${showMenu ? "opacity-100 z-10" : "opacity-0 z-0"}`} onClick={() => setShowMenu(false)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#06286E" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                        </svg>
                        <svg className={`cursor-pointer toggleMenu absolute right-0 inline lg:hidden ${showMenu ? "opacity-0 z-0" : "opacity-100 z-10"}`} onClick={() => setShowMenu(true)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#06286E" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </span>
                    {/* mobile menu */}
                    {
                        showMenu
                        ?
                        <div className=' drop-shadow-xl rounded-[1rem] absolute top-[55px] right-[0px] bg-gradient-to-b from-[#06286E] to-[#164EC0] w-3/4 p-6'>
                            <ul className="list-none flex flex-col">
                                <li className="cursor-pointer py-2 me-[50px] text-[18px] text-[#fff]">Home</li>
                                <li className="cursor-pointer py-2 me-[50px] text-[18px] text-[#fff]">Flashcard</li>
                                <li className="cursor-pointer py-2 me-[50px] text-[18px] text-[#fff]">Contact</li>
                                <li className="cursor-pointer py-2 me-[50px] text-[18px] text-[#fff]">FAQ</li>
                            </ul>
                        </div>
                        :
                        ""
                    }

                </div>
            </div>
        </nav>
    )
}

export default Header
