import React from "react";
import AboutPhoto from "../Images/About.png";
import html from "../Images/htmlIcon.png";
import css from "../Images/cssIcon.png";
import js from "../Images/jsIcon.png";
import bootstrap from "../Images/bootstrapIcon.png";
import tailwind from "../Images/tailwindIcon.png";
import react from "../Images/reactIcon.png";
import github from "../Images/githubIcon.png";
import vite from "../Images/viteIcon.svg";
import API from "../Images/API.png";

function About() {
  return (
    <div
      className="text-center p-10 bg-white dark:bg-slate-900 dark:text-slate-100"
      id="about">
      <div className="p-4 drop-shadow-4xl border-2 dark:drop-shadow-5xl bg-white  dark:bg-slate-800 dark:border-none">
        <div className="text-xl font-bold mb-12">About Me</div>
        <div className="flex md:flex-row flex-col justify-center mb-10">
          <div className="w-full md:w-1/3 mr-10 mb-4">
            <img src={AboutPhoto} alt="computer" className="rounded-full" />
          </div>
          <div className="md:w-1/2 w-full text-start sm:text-sm text-xs font-bold">
            Hello! I'm Mr. Guu, a passionate React front-end developer based in
            Myanmar. With a solid foundation in HTML, CSS, and JavaScript, I've
            journeyed through the world of web development, delving into CSS
            frameworks like Tailwind and Bootstrap to enhance my design
            capabilities. My focus on front-end development led me to master the
            React library, where I build dynamic and user-centric web
            applications that seamlessly blend functionality and aesthetics. I
            also have experience working with APIs, integrating them to create
            robust and interactive web experiences. From crafting responsive
            designs using CSS frameworks to creating interactive interfaces with
            React and harnessing the capabilities of APIs, I'm dedicated to
            turning ideas into engaging digital experiences. Inspired by the
            intersection of technology and creativity, I'm eager to contribute
            my skills to meaningful projects and leave a mark in the digital
            landscape.
          </div>
        </div>
      </div>
      <div className="my-10 p-4 drop-shadow-4xl border-2 bg-white dark:drop-shadow-5xl dark:bg-slate-800 dark:border-none">
        <div className="text-xl font-bold mb-5">Use Tech</div>
        <div className="flex justify-around flex-wrap">
          <img src={html} alt="" className="w-10 h-10" />
          <img src={css} alt="" className="w-10 h-10" />
          <img src={js} alt="" className="w-10 h-10" />
          <img src={bootstrap} alt="" className="w-10 h-10" />
          <img src={tailwind} alt="" className="w-10 h-10" />
          <img src={react} alt="" className="w-10 h-10" />
          <img src={github} alt="" className="w-10 h-10" />
          <img src={vite} alt="" className="w-10 h-10" />
          <img src={API} alt="" className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
}

export default About;
