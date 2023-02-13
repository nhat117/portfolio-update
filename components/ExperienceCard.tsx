// Component for experience card
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CustomImage from "./CustomImage";
type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article
      className='flex flex-col items-center flex-shrink-0 rounded-lg space-y-7 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer
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
          alt='Delichill logo'
          width={1240}
          height={1440}
          src='https://user-images.githubusercontent.com/72547907/218367014-b0cdd9cb-d2e3-4c0f-9f55-7e1ae58d9b3a.jpeg'
        />
      </motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>CEO of DELICHILL</h4>
        <p className='mt-1 text-2xl font-bold'>DELICHILL</p>
        <div className='flex my-2 space-x-2'>
          <CustomImage
            className='relative w-10 h-10'
            src='https://user-images.githubusercontent.com/72547907/218374571-a2754d23-0166-4978-b8a2-1d4c3f0ace93.png'
            width={500}
            height={500}
            alt='aws'
          />
          <CustomImage
            className='relative w-10 h-10'
            src='https://user-images.githubusercontent.com/72547907/218374575-a19eb037-f6ba-4998-b934-de384d1454aa.png'
            width={500}
            height={500}
            alt='spring'
          />
          <CustomImage
            className='relative w-10 h-10'
            src='https://user-images.githubusercontent.com/72547907/218374580-ed718f96-1934-400b-bc75-6aef41dd6518.png'
            width={500}
            height={500}
            alt='sql'
          />
          <CustomImage
            className='relative w-10 h-10'
            src='https://user-images.githubusercontent.com/72547907/218374582-ef7d31d1-c85e-4521-be6c-2e4188dfe9f1.png'
            width={500}
            height={500}
            alt='python'
          />
        </div>
        <p className='py-5 text-gray-300 uppercase'>10/2021-06/2022</p>
        <ul className='ml-5 space-y-4 text-lg list-disc'>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nihil?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nihil?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nihil?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nihil?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nihil?</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
