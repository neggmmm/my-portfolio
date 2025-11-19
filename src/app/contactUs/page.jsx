"use client"
import React, { useState ,useRef} from "react";
import emailjs from '@emailjs/browser';
import BlurText from "../Components/BlurText";
import { VscGithub } from "react-icons/vsc";
import { PiLinkedinLogoBold } from "react-icons/pi";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { FaUpwork } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";


export default function ContactUs() {
    const [userNameFocused, setUserNameFocused] = useState(false)
    const [emailFocused, setEmailFocused] = useState(false)
    const [phoneNumberFocused, setPhoneNumberFocused] = useState(false)
    const [messageFocused, setMessageFocused] = useState(false)
    const [clientData, setClientData] = useState({ name: "", email: "", phoneNumber: "", message: "" })
    const [sending, setSending] = useState(false)
    const [statusMessage, setStatusMessage] = useState("")
    const [sentName, setSentName] = useState("")
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          setSending(false);
          setStatusMessage("Message sent successfully!");
          setSentName(`Thank you, ${clientData.name}!`);
          setClientData({ name: "", email: "", phoneNumber: "", message: "" });
        },
        (error) => {
          setSending(false);
          setStatusMessage("Failed to send message. Please try again.");
        },
      );
      
  };

    return (
        <div id="contactUs">
           
            <div className="flex justify-around flex-col px-20 py-10 bg-[#111] text-[#EDE8D0] sticky top-0 h-[100vh] z-60">
                
                <div className="flex flex-col xl:flex-row  w-full justify-between items-end">
                    <div className="mb-30 flex flex-col  items-center xl:items-start">
                        <BlurText
                        text="Let's Get Inspired Together!"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-xl font-bold md:text-5xl lg:text-6xl"
                    />
                       <BlurText
                        text="Send Your message"
                        delay={150}
                        animateBy="words"
                        direction="bottom"
                        className="text-xl md:text-4xl lg:text:text-5xl"
                    />
                    </div>
                    <div className="flex flex-col xl:w-[40%] w-full text-white z-30">
                        
                        <form ref={form} onSubmit={sendEmail}>
                        <div className="flex flex-col ">
                            <label
                                className={`${userNameFocused || clientData.name ? "translate-y-0 text-[#e9d6d6] font-bold" : "translate-y-9"} transition-all duration-500 text-[#aaa] focus:text-[#EDE8D0]`} htmlFor="name">
                                Name
                            </label>
                                <input onFocus={() => setUserNameFocused(true)} onBlur={() => setUserNameFocused(false)}
                                    value={clientData.name} onChange={(e) => setClientData({ ...clientData, name: e.target.value })} id="name" name="name"
                                    className="bg-transparent border-b-4 border-[#e9d6d6] py-2 focus:outline-none" />
                        </div>

                        {/* email and phone number */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex flex-col ">
                                <label
                                    className={`${emailFocused || clientData.email ? "translate-y-0 text-[#e9d6d6] font-bold" : "translate-y-9"} transition-all duration-500 text-[#aaa] focus:text-[#EDE8D0]`} htmlFor="Email">Email</label>
                                <input onFocus={() => setEmailFocused(true)} onBlur={() => setEmailFocused(false)}
                                    value={clientData.email} onChange={(e) => setClientData({ ...clientData, email: e.target.value })} type="email" id="email" name="email"
                                    className="bg-transparent border-b-4 border-[#e9d6d6] py-2 focus:outline-none"></input>
                            </div>
                            {/* PHONE NUMBER */}
                            {/* TEST 2 */}
                            <div className="flex flex-col">
                                <label
                                    className={`${phoneNumberFocused || clientData.phoneNumber ? "translate-y-0 text-[#e9d6d6] font-bold" : "translate-y-9"} transition-all duration-500 text-[#aaa] focus:text-[#EDE8D0]`} htmlFor="phoneNumber">Phone Number</label>
                                <input onFocus={() => setPhoneNumberFocused(true)} onBlur={() => setPhoneNumberFocused(false)} name="phoneNumber"
                                    value={clientData.phoneNumber} onChange={(e) => setClientData({ ...clientData, phoneNumber: e.target.value })}
                                    type="text" id="phoneNumber"
                                    className="bg-transparent border-b-4 border-[#e9d6d6] py-2 focus:outline-none"></input>
                            </div>
                        </div>

                        {/* message */}
                        <div className="flex flex-col">
                            <label className={`${messageFocused || clientData.message ? "translate-y-0 text-[#e9d6d6] font-bold" : "translate-y-15 "} transition-all duration-500 text-[#aaa] focus:text-[#EDE8D0]`} htmlFor="message">Message</label>
                            <textarea onFocus={() => setMessageFocused(true)} onBlur={() => setMessageFocused(false)}
                                value={clientData.message} onChange={(e) => setClientData({ ...clientData, message: e.target.value })} name="message"
                                id="message" className="bg-transparent border-b-4 border-[#e9d6d6] py-2 focus:outline-none"></textarea>
                        </div>
                        <div className="bg-white duration-300 text-black py-2 hover:bg-[#EDE8D0] my-5 transition-all">
                            <button disabled={sending} type="submit" className="px-2  text-center w-full ">{sending ? 'Sending...' : 'Send Your Message!'}</button>
                        </div>

                        </form>

                        {/* status / success */}
                        {statusMessage ? <p className="mt-2 text-sm text-[#e9d6d6]">{statusMessage}</p> : null}
                        {sentName ? <h3 className="mt-4 text-3xl">{sentName}</h3> : null}
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <BlurText
                        text="Get in Touch"
                        delay={350}
                        animateBy="words"
                        direction="top"
                        className="text-4xl font-bold md:text-5xl lg:text-6xl"
                    />
                <div className="mt-10 flex justify-center hover:scale-120 duration-500 transition-all border-2 border-[#EDE8D0]/30 rounded-full shadow-[0_0_10px_rgba(237,232,208,0.3)]">

                    <Link href={"https://github.com/neggmmm"} target="_blank"  className="text-4xl transition-all hover:scale-150 duration-300 py-3 px-4 ease-in-out text-[#EDE8D0] ">
                    <VscGithub />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/neggmmm/"} target="_blank" className="text-4xl transition-all hover:scale-150 duration-300 py-3 px-4 ease-in-out text-[#EDE8D0] ">
                    <PiLinkedinLogoBold />
                    </Link>
                     <Link href={"https://www.upwork.com/freelancers/~01d5e39e4861b93c37"} target="_blank" className="text-4xl transition-all hover:scale-150 duration-300 py-3 px-4 ease-in-out text-[#EDE8D0] ">
                    <FaUpwork />
                    </Link>
                    <Link href={"mailto:abdalkareemnegm@gmail.com"} className="text-4xl transition-all hover:scale-150 duration-300 py-3 px-4 ease-in-out text-[#EDE8D0]">
                    < BiLogoGmail/>
                    </Link>
                     <Link href={"https://wa.me/201063681459?text=Hello, I like your portfolio"} target="_blank" className="text-4xl transition-all hover:scale-150 duration-300 py-3 px-4 ease-in-out text-[#EDE8D0]">
                    <BsWhatsapp />
                    </Link>
                    
                </div>
                </div>
                <div className="absolute top-20 left-20 opacity-20 z-20 select-none">
                    <div className="hidden xl:block">
                     <BlurText
                        text="N E G M"
                        delay={550}
                        animateBy="words"
                        direction="top"
                        className="text-9xl tracking-tighter "
                    />
                    </div>
                </div>
            </div>
        </div>
    );
}
