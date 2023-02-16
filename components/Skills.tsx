import { motion } from 'framer-motion';
import { Skill } from '../typing';
import SkillComponent from './SkillComponent';

type Props = {
  skills : Skill[];
}

const Skills = ({skills}: Props) => {
  return (
    <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.5}}
        viewport={{ once: true }}
        className='relative flex flex-col justify-center mx-auto items-center  text-center md:text-left xl:flex-row max-w-[2000px] xl:px-1 xl:space-y-0 min-h-screen'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currency proficiency</h3>
        {/* A div contains a grid pattern */}
        <div className='grid grid-cols-4 gap-5'>
          {
            skills.slice(0, skills.length/2).map((skill, index) => {
              return <SkillComponent directionLeft={true} key={index} skill={skill} />
            })
          }
          {
            skills.slice(skills.length/2, skills.length).map((skill, index) => {
              return <SkillComponent key={index} skill={skill} />
            })
          }
          
        </div>
    </motion.div>
  )
}

export default Skills