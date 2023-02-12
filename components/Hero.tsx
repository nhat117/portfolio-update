import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hello World", "The Name's Nhat", "Saigonese.exe", "<Developer />", "<DataScientist/>"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden'>
      <BackgroundCircles />
      <div className='relative h-32 w-32 mx-auto'>
        <Image
          src='https://user-images.githubusercontent.com/72547907/218288648-b1050de3-fd0a-4971-8c11-3379fab597c2.jpg'
          alt='Nhat Bui'
          width={600}
          height={600}
          className='object-cover object-contain rounded-full'
        />
      </div>
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
