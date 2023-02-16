//Type script code snippet
import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typing";
import { url } from 'inspector';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
      <motion.img
        className='-mb-20 mb:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        src={urlFor(pageInfo?.profilePic).url()}
      />
      <div className='px-0 space-y-10 md:px-10'>
        <h4 className='text-4xl font-semibold '>
          <span className='underline decoration-[#F7AB0A]/50'>{`I'm ${pageInfo?.name}`}</span>
        </h4>
        <p className='text-xl'> {pageInfo?.backgroundInfo}</p>
      </div>
    </motion.div>
  );
};

export default About;
