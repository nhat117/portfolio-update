import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "20%"],
      }}
      transition={{ duration: 2 , repeat: Infinity, ease: "easeInOut", repeatDelay: 1, repeatType: "reverse"}}
      className='relative flex items-center justify-center'
    >
      <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
      <div className='rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52' />
      <div className='rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-52' />
      <div className='rounded-full border border-[#F7AB03] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse' />
      <div className='rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52 animate-pulse' />
    </motion.div>
  );
};

export default BackgroundCircles;
