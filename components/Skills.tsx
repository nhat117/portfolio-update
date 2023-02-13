import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className='relative flex flex-col justify-center mx-auto items-center  text-center md:text-left xl:flex-row max-w-[2000px] xl:px-1 xl:space-y-0 min-h-screen'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currency proficiency</h3>
        {/* A div contains a grid pattern */}
        <div className='grid grid-cols-4 gap-5'>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </div>
    </motion.div>
  )
}

export default Skills