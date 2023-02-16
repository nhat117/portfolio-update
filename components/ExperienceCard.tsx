// Component for experience card
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CustomImage from "./CustomImage";
import { Experience } from "../typing";
import { url } from "inspector";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article
      className='flex flex-col items-center flex-shrink-0 rounded-lg space-y-7 w-[200px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer
     transition-opacity duration-200 overflow-hidden'
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=' relative w-32 h-32  xl:w-[200px] xl:h-[200px] object-cover object-center'
      >
        <Image
          className='object-contain rounded-full md:rounded-full'
          alt={experience?.companyName}
          width={1240}
          height={1440}
          src={urlFor(experience?.companyLogo).url()}
        />
      </motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
        <p className='mt-1 text-2xl font-bold'>{experience?.companyName}</p>
        <p className='text-gray-300 uppercase'>{`${experience.startDate} / ${experience.endDate}`}</p>
        <div className='flex items-center content-center w-10 h-10 my-3 space-x-2'>
          {experience?.technologies.map((technology, index) => (
            <Image
              key={index}
              className='relative rounded-full object-fit-rescale'
              width={800}
              height={800}
              alt={technology?.title}
              src={urlFor(technology?.image).url()}
            />
          ))}
        </div>
        <p className='py-5 text-xl font-semibold text-gray-300 uppercase'>{`Responsibility`}</p>
        <ul className='ml-5 space-y-4 overflow-y-scroll text-lg list-disc max-h-96 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/40 scrollbar'>
          {experience.points.map((point, index) => (
            <li key={index} className='text-gray-300'>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
