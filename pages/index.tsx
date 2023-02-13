import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";
import { Inter } from "@next/font/google";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
const inter = Inter({ subsets: ["latin"] });
const { useState } = require("react");

export default function Home() {
  // Tract the position of scroll bar
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  // Add event listener to track the scroll position
  window.addEventListener("scroll", handleScroll, { passive: true });
  
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40'>
      <Head>
        <title>Tommy Portfolio</title>
      </Head>

      <Header />

      <section id='Hero' className='snap-start'>
        <Hero />
      </section>

      <section id='About' className='snap-center'>
        <About />
      </section>

      <section id='Experience' className='snap-center'>
        <WorkExperience />
      </section>

      <section id='Skill' className='snap-start'>
        <Skills />
      </section>

      <section id='Projects' className='snap-start'>
        <Projects />
      </section>

      <section id='Contact' className='snap-start'>
        <ContactMe />
      </section>

      {/* Education */}

      {/* Footer */}
      <Link href='#Hero'>
        <footer className='sticky w-full cursor-pointer bottom-5'>
          <div className='flex items-start p-4'>
            <ArrowSmallUpIcon className='filter grayscale hover:grayscale-0 w-10 h-10 text-[#F7AB0A] ' />
          </div>
        </footer>
      </Link>
    </div>
  );
}
