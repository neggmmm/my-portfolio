'use client'
import React, { useState } from "react";

export default function ContactUs() {
  const [userNameFocused, setUserNameFocused] = useState(false)
  const [emailFocused, setEmailFocused] = useState(false)
  const [phoneNumberFocused, setPhoneNumberFocused] = useState(false)
  const [messageFocused, setMessageFocused] = useState(false)
  const [clientData, setClientData] = useState({ name: "", email: "", phoneNumber: "", message: "" })
  return (
    <div>
      <div className="flex justify-around flex-col px-20 py-10 bg-black text-[#EDE8D0] sticky top-0 h-[100vh] z-21">
        <div>
          <p className="text-9xl translate-y-2">NEGM</p>
        </div>
        <div className="flex w-full justify-between items-end">
          <div className="mb-30">
            <p className="text-6xl">Let's Get Inspired Together!</p>
            <p className="text-2xl ">Send Your message</p>
            <p className="text-2xl">Get in Touch</p>
          </div>
          <div className="flex flex-col w-[40%] text-white my-10">
            {/* Name */}
            
            <div className="flex flex-col ">
              <label
                className={`${userNameFocused || clientData.name ? "translate-y-0 text-[#e9d6d6] font-bold" : "translate-y-9"} transition-all duration-500 text-[#aaa] focus:text-[#EDE8D0]`} htmlFor="name">
                Name
              </label>
              {console.log(clientData.name)}
              <input onFocus={() => setUserNameFocused(true)} onBlur={() => setUserNameFocused(false)}
                value={clientData.name} onChange={(e) => setClientData({...clientData,name:e.target.value})} id="name"
                className="bg-[#121212]  border-b-4 border-[#e9d6d6] py-2 focus:outline-none" />
            </div>

            {/* email and phone number */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col my-4">
                <label
                  className={`${emailFocused || clientData.email ? "translate-y-0 text-[#e9d6d6] font-bold" : "translate-y-9"} transition-all duration-500 text-[#aaa] focus:text-[#EDE8D0]`} htmlFor="Email">Email</label>
                <input onFocus={() => setEmailFocused(true)} onBlur={() => setEmailFocused(false)}
                 value={clientData.email} onChange={(e) => setClientData({...clientData,email:e.target.value})} type="email" id="email" 
                 className="bg-[#121212] border-b-4 border-[#e9d6d6] py-2 focus:outline-none"></input>
              </div>
                {/* PHONE NUMBER */}
                {/* TEST 2 */}
              <div className="flex flex-col my-4">
                <label
                  className={`${phoneNumberFocused || clientData.phoneNumber ? "translate-y-0 text-[#e9d6d6] font-bold" : "translate-y-9"} transition-all duration-500 text-[#aaa] focus:text-[#EDE8D0]`} htmlFor="phoneNumber">Phone Number</label>
                <input onFocus={() => setPhoneNumberFocused(true)} onBlur={() => setPhoneNumberFocused(false)}
                value={clientData.phoneNumber} onChange={(e) => setClientData({...clientData,phoneNumber:e.target.value})}
                type="text" id="phoneNumber"
                className="bg-[#121212] border-b-4 border-[#e9d6d6] py-2 focus:outline-none"></input>
              </div>
            </div>

            {/* message */}
            <div className="flex flex-col">
              <label className={`${messageFocused || clientData.message ? "translate-y-0 text-[#e9d6d6] font-bold" : "translate-y-15 "} transition-all duration-500 text-[#aaa] focus:text-[#EDE8D0]`} htmlFor="message">Message</label>
              <textarea onFocus={() => setMessageFocused(true)} onBlur={() => setMessageFocused(false)}
              value={clientData.message} onChange={(e) => setClientData({...clientData,message:e.target.value})}
              id="message" className="bg-[#121212]  border-b-4 border-[#e9d6d6] py-2 focus:outline-none"></textarea>
            </div>
            <button className="bg-[#523088] py-2 mt-3 hover:bg-[#471063] focus:bg-[#3a0555] transition-all">Send Your Message!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
