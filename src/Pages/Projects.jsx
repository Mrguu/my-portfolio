import React from "react";
import crypto from "../Images/crypto.png";
import burger from "../Images/burger.png";
import gym from "../Images/gym.png";
import thumbnail from "../Images/thumbnail.png";

function Projects() {
  const Portfolios = [
    {
      id: "1",
      name: "OTAKUFLIX",
      image: thumbnail,
      desc: ` Dive into the captivating world of anime with "OTAKUFLIX." Our
      website is your gateway to an immersive streaming experience,
      offering a seamless interface to explore a vast library of anime
      content. With user-friendly navigation and intuitive features, you
      can easily discover and watch your favorite series and films.
      Immerse yourself in the magic of anime with "OTAKUFLIX."`,
      github: "https://github.com/Mrguu/OTAKUFLIX-Streaming-app",
      link: "https://otakuflix.netlify.app/",
    },
    {
      id: "2",
      name: "Gorilla-Fitness",
      image: gym,
      desc: `"Gorilla-Fitness," where strength meets simplicity. Our
      user-friendly website provides easy access to a variety of fitness
      programs, expert advice, and nutrition plans. Unleash your inner
      strength and achieve your fitness goals with us!`,
      github: "https://github.com/Mrguu/Gorilla-Fitness",
      link: "https://gorilla-fitness.netlify.app",
    },
    {
      id: "3",
      name: "Legendary Burger",
      image: burger,
      desc: `"Legendary Burger" – a gastronomic journey redefining burgers. Our
      website offers a streamlined experience, making burger indulgence
      effortless. From classic favorites to innovative creations, explore
      our menu with ease. Get ready to savor legendary flavors, all at
      your fingertips.`,
      github: "https://github.com/Mrguu/Gorilla-Fitness",
      link: "https://mrguu.github.io/Burger-Order-App/",
    },
    {
      id: "4",
      name: "Scam Mining",
      image: crypto,
      desc: ` "Scam Mining" is a user-friendly crypto mining platform designed for
      easy cryptocurrency mining. With a simple interface, effortless
      deposit and withdrawal processes, and a variety of mining plans, it
      offers an accessible way to get started in the world of crypto
      mining.`,
      github: "https://github.com/Mrguu/Crypto-Mining-App",
      link: "https://mrguu.github.io/Crypto-Mining-App/",
    },
  ];
  return (
    <div id="projects" className="p-10 dark:bg-slate-900 dark:text-blue-500">
      <div className="text-xl font-bold text-center mb-5">Portfolio</div>
      {Portfolios.map((item) => {
        return (
          <div
            key={item.id}
            className="flex md:flex-row-reverse flex-col justify-center items-center drop-shadow-4xl border-2 bg-white p-5 mb-5 dark:drop-shadow-5xl dark:border-none dark:bg-slate-800">
            <img
              src={item.image}
              alt="anime streaming website"
              className="md:w-1/4 w-full rounded backdrop:object-cover md:ml-10 ml-0 mb-4 md:mb-0"
            />
            <div className="md:w-1/2">
              <h3 className="font-bold mb-2">{item.name}</h3>
              <p className="md:text-sm text-xs font-bold">{item.desc}</p>
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
  );
}

export default Projects;
