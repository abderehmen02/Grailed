'use client'
import React from 'react';
import { motion,Variants} from 'framer-motion';
import { textVariant2 } from '@/front_utils/motion';

// Assuming `textVariant2` has a type that can be imported or defined,
// you should import or define that type to use here for strong typing.
// If it's defined in '@/front_utils/motion', ensure that it's exported properly from there.

// Define a type for the props expected by the Title component
interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <motion.h2
      variants={textVariant2} // Ensure this is correctly typed in its definition file
      initial="hidden"
      whileInView="show"
      className='font-bold text-[22px] tablet:text-[32px] px-4 pb-5 leading-[32px]'
    >
      {text}
    </motion.h2>
  );
};

export default Title;
