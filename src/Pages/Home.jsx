import React from "react";
import "../Styles/Home.css";
import profile from "../Images/profile.png";
import { Link } from "react-scroll";
import { useContext } from "react";
import { DarkContext } from "../Context/DarkContext";
function Home() {
  const { handleSwitch } = useContext(DarkContext);
  return (
    <div
      className="flex h-full md:px-20 px-4 dark:bg-slate-900 dark:text-blue-500 "
      id="home">
      <div className="my-20 flex flex-col md:flex-row items-center justify-between ">
        <div>
          <img
            src={profile}
            alt="portfolioPhoto"
            className="profile sm:w-80 w-60  rounded-full drop-shadow-6xl border-gray-900 border-4 dark:drop-shadow-5xl"
          />
        </div>
        <div className="md:w-1/2 md:mx-6 w-9/12 md:text-start text-center mt-6 flex  flex-col md:items-start items-center justify-center">
          <div className="text-xl font-bold mb-5">Hi there, I'm Mr. Guu</div>
          <div className="sm:text-sm font-bold text-xs sm:text-justify justify-center">
            A React front-end developer based in Myanmar. I'm passionate about
            creating engaging web experiences using React to build user-friendly
            interfaces. Whether it's building interactive websites or responsive
            web applications, I'm dedicated to delivering top-notch results.
          </div>
          <div>
            <Link to="projects" smooth={true} duration={1000}>
              <button className="rounded-full bg-sky-600 hover:bg-sky-500 text-white px-2 py-1 text-sm font-bold mt-4">
                My projects
              </button>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 text-sky-600 h-6 inline-block ml-4 cursor-pointer hover:text-black dark:hover:text-white">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                href="/"
              />
            </svg>
          </div>
          <button className="flex border border-sky-500 w-16 hover:scale-105 font-bold mt-12 px-2 py-1 rounded-full text-xs ">
            <p>Scroll</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
