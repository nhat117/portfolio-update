import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from '../typing';

type Props = {
  experiences: Experience [];
};

const WorkExperience = ({experiences}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className='relative flex flex-col items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <div className='flex w-full p-10 space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40'>
        {/* Place holder experience card */}
        {
          experiences.map((exp, index) => {
            return <ExperienceCard key={index} experience = {exp} />
          })
        }
        
      </div>
    </motion.div>
  );
};

export default WorkExperience;
