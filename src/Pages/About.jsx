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
import ScrollCarousel from "scroll-carousel-react";
import mongodb from "../Images/mongodb.png";
import nextjs from "../Images/nextjs.png";
import expressjs from "../Images/express.png";
import nodejs from "../Images/nodejs.png";
import mysql from "../Images/mysql.png";

function About() {
  const teches = [
    {
      id: "1",
      icon: html,
    },
    {
      id: "2",
      icon: css,
    },
    {
      id: "3",
      icon: js,
    },
    {
      id: "4",
      icon: bootstrap,
    },
    {
      id: "5",
      icon: tailwind,
    },
    {
      id: "6",
      icon: react,
    },
    {
      id: "7",
      icon: github,
    },
    {
      id: "8",
      icon: vite,
    },
    {
      id: "9",
      icon: API,
    },
    {
      id: "10",
      icon: mongodb,
    },
    {
      id: "11",
      icon: mysql,
    },
    {
      id: "12",
      icon: nodejs,
    },
    {
      id: "13",
      icon: nextjs,
    },
    {
      id: "14",
      icon: expressjs,
    },
  ];

  return (
    <div
      className="text-center p-10 bg-white dark:bg-slate-900 dark:text-blue-500"
      id="about">
      <div className="p-4 drop-shadow-4xl border-2 dark:drop-shadow-5xl bg-white  dark:bg-slate-800 dark:border-none">
        <div className="text-xl font-bold mb-12">About Me</div>
        <div className="flex md:flex-row flex-col justify-center mb-10">
          <div className="w-full md:w-1/3 mr-10 mb-4">
            <img src={AboutPhoto} alt="computer" className="rounded-full" />
          </div>
          <div className="md:w-1/2 w-full sm:text-sm text-xs font-bold sm:tracking-wider tracking-tight sm:text-justify justify-center leading-5">
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
        <ScrollCarousel
          className="flex justify-around flex-wrap"
          autoplay
          speed={2}
          onReady={() => console.log("I am ready")}>
          {teches.map((tech) => (
            <img
              src={tech.icon}
              alt=""
              className="w-10 h-10 ml-5"
              key={tech.id}
            />
          ))}
        </ScrollCarousel>
      </div>
    </div>
  );
}

export default About;

{
  /* <img src={html} alt="" className="w-10 h-10" />
          <img src={css} alt="" className="w-10 h-10" />
          <img src={js} alt="" className="w-10 h-10" />
          <img src={bootstrap} alt="" className="w-10 h-10" />
          <img src={tailwind} alt="" className="w-10 h-10" />
          <img src={react} alt="" className="w-10 h-10" />
          <img src={github} alt="" className="w-10 h-10" />
          <img src={vite} alt="" className="w-10 h-10" />
          <img src={API} alt="" className="w-10 h-10" /> */
}

// <div className="flex justify-around flex-wrap">
// {teches.map((tech) => {
//   return (

//   );
// })}
// </div>
