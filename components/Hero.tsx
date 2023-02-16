import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "@/typing";
import { urlFor } from '../sanity';
type Props = {
  pageInfo: PageInfo;
};

const Hero = ({pageInfo}: Props) => {

  const [text, count] = useTypewriter({
    words: pageInfo?.typewriterText,
    loop: true,
    delaySpeed: 1800,
  });
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center'>
      <BackgroundCircles />
      <div className='relative w-32 h-32 mx-auto'>
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          alt='Nhat Bui'
          width={600}
          height={600}
          className='object-cover rounded-full'
        />
      </div>
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer </h2>
        <h1 className='px-10 text-5xl font-semibold lg:text-6xl'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div className="mt-5">
          <Link href='#About'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#Experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#Education'>
            <button className='heroButton'>Education</button>
          </Link>
          <Link href='#Skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#Projects'>
            <button className='heroButton'>Projects</button>
          </Link>
          <Link href='#Contact'>
            <button className='heroButton'>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
