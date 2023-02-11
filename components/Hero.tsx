import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hello World", "The Name's Nhat", "Saigonese.exe", "<Developer />", "<DataScientist/>"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
      </h1>
    </div>
  );
};

export default Hero;
