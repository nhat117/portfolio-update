import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skill } from '@/typing';
import { urlFor } from '../sanity';

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const SkillComponent = (props: Props) => {
  return (
    <div className='relative flex cursor-pointer group'>
      <motion.div
        initial={{ x: props.directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: .5 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <div className='relative w-24 h-24 transition duration-300 duration xl:w-32 xl:h-32 filter group-hover:grayscale'>
          <Image
            className='object-scale-down w-full h-full border border-gray-500 rounded-full'
            alt={props.skill?.title}
            width={500}
            height={500}
            src={urlFor(props.skill?.image).url()}
          />
        </div>
      </motion.div>
      <div className='absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-300'>{props.skill?.progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default SkillComponent;
