//Type script code snippet
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className='flex relative flex-col text-center md:text-left md:flex-row h-screen max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
      <motion.img
        className='-mb-20 mb:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        src='https://user-images.githubusercontent.com/72547907/218299043-3b2bee8d-083d-4c7f-b91a-62444028edc2.jpg'
      />
      <div className="space-y-4xl px10 md:px-10">
        <h4 className="text-4xl font-semibold ">
          A <span className="underline decoration-[#F7AB0A]/50">little</span> {" "} bit about me
        </h4>
        <p></p>
      </div>
    </div>
  );
};

export default About;
