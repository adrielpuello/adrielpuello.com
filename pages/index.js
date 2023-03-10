import Head from "next/head";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillHtml5,
} from "react-icons/ai";
import {
  DiReact,
  DiCss3,
} from "react-icons/di"
import {
  SiRubyonrails,
  SiRuby,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si"
import { BsFillMoonFill } from "react-icons/bs";
import { useState } from "react";
import profilepic from "../public/image0.jpeg";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1></h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-red-500 text- to-red-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://docs.google.com/document/d/1wMMS6osrUb4B0d5PLsvQqPJQRy1IXpXqygeXvuNAeNM/edit?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-red-600 font-medium dark:text-red-400 md:text-6xl">
              Adriel Puello
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full stack software engineer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Setting the standard and rising above it through discipline, grit, and a passion for learning.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href='https://github.com/adrielpuello'><AiFillGithub /></a>
              <a href='https://www.linkedin.com/in/adriel-puello/'><AiFillLinkedin /></a>
              <a href='https://www.youtube.com/channel/UCaJ5lvgC3PsRyiORErSe2XQ'><AiFillYoutube /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-red-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={profilepic} alt='' layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-5xl py-2 text-red-600 font-medium dark:text-red-400 md:text-4xl">My Story</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">If you had told me that I would be in the tech industry five months ago let alone a year I would have laughed in your face.
            Before I set my sights on Flatiron School's software engineering program, I was attending college but was unsatisfied with the direction my life was headed, and I knew I had to bring about change.
            That being said, the thought of quitting something without establishing my next course of action didn't sit right, so I explored my options. I was looking for a field of work
            in which I could tap into both my passion for creativity, which I express through singing and songwriting, and my passion for learning practical skills that will help further my career.
            After speaking with some family and friends that have had a phenominal degree of success in the tech world, I decided I needed to be a part of it. All I can say is that I am grateful for the decision
            that I made and am looking forward to the future!</p>
          </div>
        </section>
        <section className="text-center p-10 py-10">
          <div>
            <h3 className="text-5xl py-2 text-red-600 font-medium dark:text-red-400 md:text-4xl">Skills</h3>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <SiTailwindcss />
              <DiCss3 />
              <AiFillHtml5 />
              <SiRubyonrails />
              <SiRuby />
              <DiReact />
              <SiJavascript />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-5xl py-2 text-red-600 font-medium dark:text-red-400 md:text-4xl">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a software engineer at
              <a href="https://flatironschool.com/"><span className="text-red-400"> Flatiron School </span></a>
              to now I've been focused on honing my skills. In doing so, I've been able to make some pretty neat things along the way.
            </p>
          </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
              <div className="container">
                <img 
                src="https://blog.hubspot.com/hs-fs/hubfs/ecommerce-10.jpg?width=595&height=400&name=ecommerce-10.jpg" alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                />
                <p class="title">E-Commerce Website</p>
                <div className="overlay"></div>
                <div className="button"><a href="https://github.com/adrielpuello/fboc">Github</a><a href="https://www.youtube.com/watch?v=QjfINri3Su4">Demo</a></div>
              </div>
          </div>
          <div className="basis-1/3 flex-1">
              <div className="container">
                <img 
                src="https://workationing.com/wp-content/uploads/2018/06/How-to-meet-people-while-traveling-workationing.jpg" alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                />
                <p className="title">Adventure Awaits</p>
                <div className="overlay"></div>
                <div className="button"><a href="https://github.com/adrielpuello/Phase-5-Project">Github</a><a href="https://www.youtube.com/watch?v=hjzv1-gFy-A&t=31s">Demo</a></div>
              </div>
          </div>
          <div className="basis-1/3 flex-1">
              <div className="container">
                <img 
                src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/3281700261001/695c379f-2c5d-462c-bb75-c59ab1d7ef8d/aed1aca1-2dd5-40b2-bdf3-c7c2101601e4/1920x1080/match/image.jpg" alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                />
                <p className="title">Flatiron Library</p>
                <div className="overlay"></div>
                <div className="button"><a href="https://github.com/grace941217/Phase-4-Project">Github</a><a href="https://www.youtube.com/watch?v=dKvxejHZ-MU">Demo</a></div>
              </div>
          </div>
        </div>
        </section>
      </main>
    </div>
  );
}
