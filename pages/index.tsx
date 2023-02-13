import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BackgroundCircles from "../components/BackgroundCircles";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Tommy Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id='Hero' className='snap-start'>
        <Hero />
      </section>
      {/* About */}
      <section id='About' className='snap-center'>
        <About />
      </section>
      {/* Experience */}
      <section id='Experience' className='snap-center'>
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id='Skill' className='snap-start'>
        <Skills />
      </section>

      {/* Education */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
