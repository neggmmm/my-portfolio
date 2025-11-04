'use client'
import React, { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import BlurText from "../Components/BlurText";
import { VscGithub } from "react-icons/vsc";
import { PiLinkedinLogoBold } from "react-icons/pi";
import Link from "next/link";

export default function ContactUs() {
    const [userNameFocused, setUserNameFocused] = useState(false)
    const [emailFocused, setEmailFocused] = useState(false)
    const [phoneNumberFocused, setPhoneNumberFocused] = useState(false)
    const [messageFocused, setMessageFocused] = useState(false)
    const [clientData, setClientData] = useState({ name: "", email: "", phoneNumber: "", message: "" })
    return (
        <div id="contactUs">
           
            <div className="flex justify-around flex-col px-20 py-10 bg-[#111] text-[#EDE8D0] sticky top-0 h-[100vh] z-60">
                
                <div className="flex w-full justify-between items-end">
                    <div className="mb-30">
                        <BlurText
                        text="Let's Get Inspired Together!"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-6xl"
                    />
                       <BlurText
                        text="Send Your message"
                        delay={150}
                        animateBy="words"
                        direction="bottom"
                        className="text-3xl"
                    />
                    </div>
                    <div className="flex flex-col w-[40%] text-white z-30">
                        {/* Name */}

                        <div className="flex flex-col ">
                            <label
                                className={`${userNameFocused || clientData.name ? "translate-y-0 text-[#e9d6d6] font-bold" : "translate-y-9"} transition-all duration-500 text-[#aaa] focus:text-[#EDE8D0]`} htmlFor="name">
                                Name
                            </label>
                            {console.log(clientData.name)}
                            <input onFocus={() => setUserNameFocused(true)} onBlur={() => setUserNameFocused(false)}
                                value={clientData.name} onChange={(e) => setClientData({ ...clientData, name: e.target.value })} id="name"
                                className="bg-transparent border-b-4 border-[#e9d6d6] py-2 focus:outline-none" />
                        </div>

                        {/* email and phone number */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex flex-col ">
                                <label
                                    className={`${emailFocused || clientData.email ? "translate-y-0 text-[#e9d6d6] font-bold" : "translate-y-9"} transition-all duration-500 text-[#aaa] focus:text-[#EDE8D0]`} htmlFor="Email">Email</label>
                                <input onFocus={() => setEmailFocused(true)} onBlur={() => setEmailFocused(false)}
                                    value={clientData.email} onChange={(e) => setClientData({ ...clientData, email: e.target.value })} type="email" id="email"
                                    className="bg-transparent border-b-4 border-[#e9d6d6] py-2 focus:outline-none"></input>
                            </div>
                            {/* PHONE NUMBER */}
                            {/* TEST 2 */}
                            <div className="flex flex-col">
                                <label
                                    className={`${phoneNumberFocused || clientData.phoneNumber ? "translate-y-0 text-[#e9d6d6] font-bold" : "translate-y-9"} transition-all duration-500 text-[#aaa] focus:text-[#EDE8D0]`} htmlFor="phoneNumber">Phone Number</label>
                                <input onFocus={() => setPhoneNumberFocused(true)} onBlur={() => setPhoneNumberFocused(false)}
                                    value={clientData.phoneNumber} onChange={(e) => setClientData({ ...clientData, phoneNumber: e.target.value })}
                                    type="text" id="phoneNumber"
                                    className="bg-transparent border-b-4 border-[#e9d6d6] py-2 focus:outline-none"></input>
                            </div>
                        </div>

                        {/* message */}
                        <div className="flex flex-col">
                            <label className={`${messageFocused || clientData.message ? "translate-y-0 text-[#e9d6d6] font-bold" : "translate-y-15 "} transition-all duration-500 text-[#aaa] focus:text-[#EDE8D0]`} htmlFor="message">Message</label>
                            <textarea onFocus={() => setMessageFocused(true)} onBlur={() => setMessageFocused(false)}
                                value={clientData.message} onChange={(e) => setClientData({ ...clientData, message: e.target.value })}
                                id="message" className="bg-transparent border-b-4 border-[#e9d6d6] py-2 focus:outline-none"></textarea>
                        </div>
                        <div className="bg-white duration-300 text-black py-2 hover:bg-[#EDE8D0] my-5 transition-all">
                            <button className="px-2  text-center w-full">Send Your Message!</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <BlurText
                        text="Get in Touch"
                        delay={350}
                        animateBy="words"
                        direction="top"
                        className="text-3xl"
                    />
                <div className="flex justify-center">
                    <Link href={"https://github.com/neggmmm"} target="_blank"  className="text-3xl hover:translate-y-1 hover:text-[#50107a]/60 transition-all text-[#EDE8D0] mx-5">
                    <VscGithub />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/neggmmm/"} target="_blank" className="text-3xl hover:translate-y-1 transition-all hover:text-[#1a08be]/80 text-[#EDE8D0] mx-5">
                    <PiLinkedinLogoBold />
                    </Link>
                </div>
                </div>
                <div className="absolute top-20 left-20 opacity-20 z-20 select-none">
                     <BlurText
                        text="N E G M"
                        delay={550}
                        animateBy="words"
                        direction="top"
                        className="text-9xl tracking-tighter"
                    />
                </div>
            </div>


        </div>
    );
}
