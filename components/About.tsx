//Type script code snippet
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div 
    initial={{ opacity: 0, x:-200}}
    whileInView={{ opacity: 1, x:0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5, delay: 0.5 }}
    className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
      <motion.img
        className='-mb-20 mb:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        src='https://user-images.githubusercontent.com/72547907/218299043-3b2bee8d-083d-4c7f-b91a-62444028edc2.jpg'
      />
      <div className="px-0 space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold ">
          A <span className="underline decoration-[#F7AB0A]/50">little</span> {" "} bit about me
        </h4>
        <p className="text-xl"> {"I'm currently a Software Engineering student at RMIT University with a passion for data science and machine learning. I am constantly seeking new and innovative ways to apply my skills and knowledge in these fields to real-world problems.Throughout my studies, I have honed my programming skills in various languages including Python, Java, Javascript, C ++. I have also gained hands-on experience in data analysis and visualization, machine learning algorithms, and deep learning 🤖 🤖. My experience in these areas has not only expanded my technical abilities but also allowed me to develop a strong foundation in data-driven problem-solving.🌱 🌱 In my free time, I like to engage in activities that complement my technical skills and help me bring a unique perspective to my work. I play piano to tap into my creative side, read books to broaden my knowledge and stay inspired, and take photographs 📸 📸 to express my artistic vision."}</p>
      </div>
    </motion.div>
  );
};

export default About;
