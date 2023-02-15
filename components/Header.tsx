import React, { use } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialMedia } from "@/typing";
import { useEffect } from "react";
type Props = {
  socials: SocialMedia[];
};

const Header = ({socials}: Props) => {
  return (
    <header className='sticky top-0 z-20 flex items-start justify-between p-5 mx-auto max-w-7xl xl:items-center'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: -500 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='flex flex-row items-center'
      >
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon
            className='cursor-pointer'
            key={social._id}
            url={social.url}
            fgColor='gray'
            bgColor='transparent'
          />
        ))}
      </motion.div>
      <Link href="#Contact">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 500 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='flex flex-row items-center text-gray-300 cursor-pointer'
        >
          <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
          />
          <p className='hidden text-sm text-gray-400 uppercase md:inline-flex'>Get In Touch</p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
