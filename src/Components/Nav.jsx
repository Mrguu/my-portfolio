import React, { useState } from "react";
import "../Styles/Nav.css";
import { Link } from "react-scroll";
import { useContext } from "react";
import { DarkContext } from "../Context/DarkContext";

function Nav() {
  let links = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  const { handleSwitch } = useContext(DarkContext);

  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between px-10 py-4 border-b dark:shadow-white dark:shadow-sm dark:border-none shadow-md  items-center fixed w-full z-40 bg-white dark:bg-slate-900 dark:text-slate-100">
      <div>
        <div className="md:text-2xl font-bold cursor-pointer hover:text-sky-500">
          MrGuu.Dev
        </div>
      </div>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer absolute right-12 top-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              open
                ? "M6 18L18 6M6 6l12 12"
                : "M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            }
          />
        </svg>
      </div>
      <div className="flex items-center">
        <div
          className={`absolute md:static left-0 z-[-1] md:z-auto w-full md:w-auto bottom-0 md:right-0 mr-10w-full bg-white dark:bg-slate-900 top-14 text-center mx-2 md:transition-none transition-all ease-in duration-700 ${
            open ? "top-10 opacity-0" : "top-[-500px]"
          } opacity-100 md:opacity-100`}>
          <ul className={`md:flex justify-around `}>
            {links.map((link) => (
              <li
                key={link.name}
                className="bg-white text-sm font-bold hover:text-sky-500 cursor-pointer py-2 md:py-0 md:ml-10 border-b md:border-b-0 dark:bg-slate-900 hover:bg-gray-100 dark:hover:bg-gray-900 md:hover:bg-white">
                <Link to={link.link} smooth={true} duration={1000}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            onClick={handleSwitch}
            className="w-6 h-6 md:static ml-3 hover:text-sky-500 absolute right-5 top-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Nav;
