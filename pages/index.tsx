import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";
import { Inter } from "@next/font/google";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, SocialMedia } from "../typing";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperience } from "@/utils/fetchExperience";
import { fetchProject } from "@/utils/fetchProject";
import { fetchSkill } from "@/utils/fetchSkill";
import { fetchSocialMedia } from "@/utils/fetchSocialMedia";
import async from "./api/getExperience";
const inter = Inter({ subsets: ["latin"] });

//Type definition
type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  socialMedias: SocialMedia[];
};

export default function Home({ pageInfo, experiences, projects, skills, socialMedias }: Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40'>
      <Head>
        <title>{pageInfo.name} Portfolio</title>
      </Head>

      <Header socials = {socialMedias}/>

      <section id='Hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='About' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='Experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      <section id='Skill' className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id='Projects' className='snap-start'>
        <Projects projects={projects} />
      </section>

      <section id='Contact' className='snap-start'>
        <ContactMe pageInfo={pageInfo}/>
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

//For caching and fetching data from API

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const projects: Project[] = await fetchProject();
  const skills: Skill[] = await fetchSkill();
  const socialMedias: SocialMedia[] = await fetchSocialMedia();

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socialMedias,
    },
    revalidate: 10,
  };
};
