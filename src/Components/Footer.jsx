import React from "react";
import github from "../Images/githubicon.png";
import linkedin from "../Images/linkedin.png";

function Footer() {
  return (
    <div className="w-full h-10 dark:bg-slate-700 dark:text-slate-100 bg-gray-300 flex justify-between items-center px-10">
      <div className="flex">
        <a href="https://github.com/Mrguu">
          <img
            src={github}
            alt="github logo"
            className="w-5 h-5 cursor-pointer"
          />
        </a>
        <a href="https://www.linkedin.com/in/mr-guu-307b2a289/">
          <img
            src={linkedin}
            alt="linkedin logo"
            className="w-5 h-5 cursor-pointer ml-3"
          />
        </a>
      </div>
      <p className="text-xs font-bold">
        Copy &copy; 2023. All rights are reserved
      </p>
    </div>
  );
}

export default Footer;
