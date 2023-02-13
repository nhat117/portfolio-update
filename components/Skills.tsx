import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div className='relative flex flex-col justify-center mx-auto items-center  text-center md:text-left xl:flex-row max-w-[2000px] xl:px-1 xl:space-y-0 min-h-screen'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
    </motion.div>
  )
}

export default Skills