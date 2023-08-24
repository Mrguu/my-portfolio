import React from "react";
import crypto from "../Images/crypto.png";
import burger from "../Images/burger.png";
import gym from "../Images/gym.png";
import anime from "../Images/anime.png";

function Projects() {
  return (
    <div id="projects" className="p-10 dark:bg-slate-900 dark:text-slate-100">
      <div className="text-xl font-bold text-center mb-5">Portfolio</div>
      <div className="flex md:flex-row flex-col justify-center items-center drop-shadow-4xl border-2 bg-white dark:drop-shadow-5xl dark:border-none dark:bg-slate-800 p-5 mb-5">
        <img
          src={crypto}
          alt="cryptoweb"
          className="md:w-1/4 w-full rounded backdrop:object-cover md:mr-10 mr-0 mb-4 md:mb-0 md:drop-shadow-4xl dark:drop-shadow-5xl"
        />
        <div className="md:w-1/2">
          <h3 className="font-bold mb-2">Scam Mining</h3>
          <p className="md:text-sm text-xs font-bold">
            "Scam Mining" is a user-friendly crypto mining platform designed for
            easy cryptocurrency mining. With a simple interface, effortless
            deposit and withdrawal processes, and a variety of mining plans, it
            offers an accessible way to get started in the world of crypto
            mining.
          </p>
          <div className="text-xs font-bold mt-6">
            <a href="https://github.com/Mrguu/Crypto-Mining-App">
              <button className=" p-2 mr-4 rounded-lg bg-sky-600 hover:bg-sky-500  text-white mb-2">
                github codes
              </button>
            </a>
            <a href="https://mrguu.github.io/Crypto-Mining-App/">
              <button className="p-2 rounded-lg  bg-sky-600 hover:bg-sky-500 text-white">
                View site
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row-reverse flex-col justify-center items-center drop-shadow-4xl border-2 bg-white p-5 mb-5 dark:drop-shadow-5xl dark:border-none dark:bg-slate-800">
        <img
          src={burger}
          alt="burger order app"
          className="md:w-1/4 w-full dark:drop-shadow-5xl rounded backdrop:object-cover md:ml-10 ml-0 mb-4 md:mb-0 md:drop-shadow-4xl"
        />
        <div className="md:w-1/2">
          <h3 className="font-bold mb-2">Legendary Burger</h3>
          <p className="md:text-sm text-xs font-bold">
            "Legendary Burger" – a gastronomic journey redefining burgers. Our
            website offers a streamlined experience, making burger indulgence
            effortless. From classic favorites to innovative creations, explore
            our menu with ease. Get ready to savor legendary flavors, all at
            your fingertips.
          </p>
          <div className="text-xs font-bold mt-6">
            <a href="https://github.com/Mrguu/Burger-Order-App">
              <button className=" p-2 mr-4 rounded-lg  bg-sky-600 hover:bg-sky-500 text-white mb-2">
                github codes
              </button>
            </a>
            <a href="https://mrguu.github.io/Burger-Order-App/">
              <button className="p-2 rounded-lg  bg-sky-600 hover:bg-sky-500 text-white">
                View site
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center drop-shadow-4xl border-2 bg-white p-5 mb-5 dark:drop-shadow-5xl dark:border-none dark:bg-slate-800">
        <img
          src={gym}
          alt="fitness gym web"
          className="md:w-1/4 dark:drop-shadow-5xl w-full rounded backdrop:object-cover md:mr-10 mr-0 mb-4 md:mb-0 md:drop-shadow-4xl"
        />
        <div className="md:w-1/2">
          <h3 className="font-bold mb-2">Gorilla-Fitness</h3>
          <p className="md:text-sm text-xs font-bold">
            "Gorilla-Fitness," where strength meets simplicity. Our
            user-friendly website provides easy access to a variety of fitness
            programs, expert advice, and nutrition plans. Unleash your inner
            strength and achieve your fitness goals with us!
          </p>
          <div className="text-xs font-bold mt-6">
            <a href="https://github.com/Mrguu/Gorilla-Fitness">
              <button className=" p-2 mr-4 rounded-lg bg-sky-600 hover:bg-sky-500 text-white mb-2">
                github codes
              </button>
            </a>
            <a href="https://mrguu.github.io/Gorilla-Fitness/">
              <button className="p-2 rounded-lg  bg-sky-600 hover:bg-sky-500 text-white">
                View site
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row-reverse flex-col justify-center items-center drop-shadow-4xl border-2 bg-white p-5 mb-5 dark:drop-shadow-5xl dark:border-none dark:bg-slate-800">
        <img
          src={anime}
          alt="anime streaming website"
          className="md:w-1/4 dark:drop-shadow-5xl w-full rounded backdrop:object-cover md:ml-10 ml-0 mb-4 md:mb-0 md:drop-shadow-4xl"
        />
        <div className="md:w-1/2">
          <h3 className="font-bold mb-2">Anime Plus</h3>
          <p className="md:text-sm text-xs font-bold">
            Dive into the captivating world of anime with "Anime Plus." Our
            website is your gateway to an immersive streaming experience,
            offering a seamless interface to explore a vast library of anime
            content. With user-friendly navigation and intuitive features, you
            can easily discover and watch your favorite series and films.
            Immerse yourself in the magic of anime with "Anime Plus."
          </p>
          <div className="text-xs font-bold mt-6">
            <a href="https://github.com/Mrguu/Animeplus.com">
              <button className=" p-2 mr-4 rounded-lg bg-sky-600 hover:bg-sky-500 text-white mb-2">
                github codes
              </button>
            </a>
            <a href="https://mrguu.github.io/Animeplus.com/">
              <button className="p-2 rounded-lg  bg-sky-600 hover:bg-sky-500 text-white">
                View site
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
