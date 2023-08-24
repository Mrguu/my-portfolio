import React from "react";

function Contact() {
  return (
    <div
      className="flex flex-col justify-center items-center w-full dark:text-slate-100 dark:bg-slate-900"
      id="contact">
      <div className="mb-5 text-xl font-bold">Contact</div>
      <div className="flex justify-around w-2/3 mb-10">
        <div className="flex flex-col items-center">
          <h3 className="font-bold mb-2">Mail</h3>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-sky-600 mr-1">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <div className="cursor-pointer md:text-sm text-xs">
              pyaetheta@gmail.com
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-bold mb-2 ">Location</h3>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-sky-600 mr-1">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <div className="cursor-pointer md:text-sm text-xs">
              Myanmar.Taunggyi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
