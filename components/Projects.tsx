import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className='relative flex flex-col items-start h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
      <div className='relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory'>
        {projects.map((project, i) => {
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
              className="relative">
                <Image
                  className=''
                  alt='Retina Logo'
                  width={300}
                  height={200}
                  src='https://user-images.githubusercontent.com/72547907/190897053-256075c2-c6e4-444d-ad45-aa85c7ccd6b5.png'
                />
              </motion.div>
              <div className='max-w-6xl px-10 space-y-10 md:px-10'>
                <h4 className='text-4xl font-semibold text-center'>
                  <span className='underline decoration-[#F7AB0A]/50'>
                    Case Study {i + 1} of {projects.length}: 
                  </span>
                  {" "}
                  Retina IOS App
                </h4>
                <p className="text-lg text-center md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis nostrum illum
                  a explicabo iste quasi, aliquam, voluptas ab unde optio beatae inventore? Harum a
                  ipsum rerum ducimus vel! Et iusto necessitatibus alias assumenda velit minus
                  deleniti corporis facere cumque autem asperiores, repellendus vitae! Inventore
                  commodi vitae illo culpa aut accusamus recusandae, optio aspernatur reprehenderit
                  eligendi cupiditate placeat perferendis, quam iure.
                </p>
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
