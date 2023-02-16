import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/typing";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { urlFor } from '../sanity';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  // const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className='relative flex flex-col items-start h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
      <div className='relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40'>
        {projects?.map((project, i) => {
          return (
            <div
              key={i}
              className='flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 snap-center md:p-44'
            >
              <motion.div
                initial={{ y: -200, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className='relative'
              >
                <Image
                  className=''
                  alt={project?.title}
                  width={300}
                  height={200}
                  src={urlFor(project?.image).url()}
                />
              </motion.div>
              <div className='max-w-6xl px-10 space-y-10 md:px-10'>
                <h4 className='text-4xl font-semibold text-center'>
                  <span className='underline decoration-[#F7AB0A]/50'>Project</span> {i + 1} of{" "}
                  {projects?.length} :{"  "}
                  {project?.title}
                </h4>
                <p className='text-2xl font-semibold md:text-left'>Description: </p>
                <p className='text-lg text-center md:text-left'>{project?.description}</p>
                <p className='text-2xl font-semibold md:text-left'>Project available at: </p>
                <div className='flex items-center'>
                  <SocialIcon url={project?.githubLink} fgColor='gray' bgColor='transparent' />
                  <Link href={project?.githubLink}>
                    <p className='text-lg text-center md:text-left'>{project?.githubLink}</p>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='w-full absolute top[30%] bg-[#F7AB0A]/10 left-0 h-[500px] skew-y-12' />
    </motion.div>
  );
};

export default Projects;
