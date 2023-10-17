import React, { useEffect } from "react";
import crypto from "../Images/crypto.png";
import burger from "../Images/burger.png";
import gym from "../Images/gym.png";
import thumbnail from "../Images/thumbnail.png";
import sneakers from "../Images/sneakers.png";
import "aos/dist/aos.css";
import Aos from "aos";

function Projects() {
  const Portfolios = [
    {
      id: "1",
      name: "Sneakers Store",
      image: sneakers,
      desc: `Designed a dynamic sneaker store with React, Vite, Tailwind CSS, Skeleton Loader, and AOS Loader. Seamlessly blending sleek design with fast-loading functionality, I ensured an intuitive user experience. The site features responsive layouts, smooth content previews, and elegant scroll animations, showcasing my expertise in modern web technologies.`,
      github: " https://github.com/Mrguu/SNEAKERS-Store",
      link: " https://sneaker-store-bla-bla.netlify.app/",
    },
    {
      id: "2",
      name: "OTAKUFLIX",
      image: thumbnail,
      desc: ` Embark on an anime adventure with "OTAKUFLIX," powered by React, Vite, Tailwind CSS, and API requests. Our platform provides a seamless interface to explore a vast anime library. Utilizing intuitive features and user-friendly navigation, you can effortlessly discover and enjoy your favorite series and films. Immerse yourself in the enchanting world of anime with "OTAKUFLIX."`,
      github: "https://github.com/Mrguu/OTAKUFLIX-Streaming-app",
      link: "https://otakuflix.netlify.app/",
    },
    {
      id: "3",
      name: "Gorilla-Fitness",
      image: gym,
      desc: `"Welcome to "Gorilla-Fitness" – where strength meets simplicity. With React, Tailwind CSS, and Vite, our user-friendly website grants effortless access to diverse fitness programs, expert advice, and customized nutrition plans. Unleash your inner strength and achieve your fitness goals with us! 💪🏋️‍♂️🏃‍♀️"`,
      github: "https://github.com/Mrguu/Gorilla-Fitness",
      link: "https://gorilla-fitness.netlify.app",
    },
    {
      id: "4",
      name: "Scam Mining",
      image: crypto,
      desc: ` "Introducing "Scam Mining," your go-to platform for hassle-free cryptocurrency mining. Built with React and utilizing local storage, our user-friendly interface ensures effortless crypto mining. Experience seamless deposits, withdrawals, and a range of mining plans, providing a simple entry point into the world of crypto mining. Start mining the easy way!"`,
      github: "https://github.com/Mrguu/Crypto-Mining-App",
      link: "https://mrguu.github.io/Crypto-Mining-App/",
    },
  ];
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div id="projects" className=" p-10 dark:bg-slate-900 dark:text-blue-500">
      <div className="text-xl font-bold text-center mb-5">Portfolio</div>
      <div className="flex  flex-wrap gap-10 items-center justify-center">
        {Portfolios.map((item) => {
          return (
            <div
              key={item.id}
              data-aos="zoom-in"
              className="hover:scale-105  duration-100 md:w-1/3 w-full h-[500px] flex  flex-col gap-5 drop-shadow-4xl border-2 bg-white dark:drop-shadow-5xl dark:border-none dark:bg-slate-800 cursor-pointer">
              <img
                src={item.image}
                alt="anime streaming website"
                className="w-full rounded backdrop:object-cover "
              />
              <div className="w-full px-2 flex flex-col items-center ">
                <h3 className="font-bold mb-2">{item.name}</h3>
                <p className="text-xs text-center">{item.desc}</p>
                <div className="text-xs font-bold mt-6">
                  <a href={item.github}>
                    <button className=" p-2 mr-4 rounded-lg bg-sky-600 hover:bg-sky-500 text-white mb-2">
                      github codes
                    </button>
                  </a>
                  <a href={item.link}>
                    <button className="p-2 rounded-lg  bg-sky-600 hover:bg-sky-500 text-white">
                      View site
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
