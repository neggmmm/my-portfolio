import React from "react";

export default function ContactUs() {
  return (
    <div>
      <div className="flex  justify-between flex-col px-20 py-10 bg-black text-[#EDE8D0] sticky top-0 h-[100vh]">
        <div>
          <p className="text-9xl">NEGM</p>
        </div>
        <div className="flex w-full justify-between items-end">
          <div>
            <p className="text-6xl">Let's Get Inspired Together!</p>
            <p className="text-2xl">Send Your message</p>
            <p className="text-2xl">To Get Touch</p>
          </div>
          <div>
            <label>Name</label>
            <input></input>
            <div>
              <label>Email</label>
              <input></input>
              <label>Phone Number</label>
              <input></input>
            </div>
            <label>Message</label>
            <input></input>
          </div>
        </div>
      </div>
    </div>
  );
}
