import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Inter } from "@next/font/google";
import Head from "next/head";
import Header from "../components/Header";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
    </div>
  );
}
