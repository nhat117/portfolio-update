import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skill } from '@/typing';

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const SkillComponent = (props: Props) => {
  return (
    <div className='relative flex cursor-pointer group'>
      <motion.div
        initial={{ x: props.directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <div className='relative w-24 h-24 transition duration-300 duration xl:w-32 xl:h-32 filter group-hover:grayscale'>
          <Image
            className='object-cover w-full h-full border border-gray-500 rounded-full'
            alt='firebase'
            width={50}
            height={50}
            src='https://user-images.githubusercontent.com/72547907/218379528-7ef8ba85-15bf-4813-9911-63578b4bfb18.png'
          />
        </div>
      </motion.div>
      <div className='absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-300'>${props.skill.progress}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillComponent;
