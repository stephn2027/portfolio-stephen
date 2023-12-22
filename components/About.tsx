'use client';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import SectionHeading from './SectionHeading';


export default function About() {
  const {ref} = useSectionInView('About');
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 sm:text-xl sm:!leading-8">
        I'm a self-taught frontend developer with a solid
        foundation in{' '}
        <span className="font-medium">Information Technology</span>, I earned my
        bachelor's degree as a testament to my commitment to understanding the
        intricacies of the digital world. My journey into the realm of coding
        began as a personal exploration, and I quickly discovered my love for
        problem-solving and creating efficient, user-friendly applications.
        Through countless hours of self-directed learning and hands-on projects,
        I've honed my skills in React, JavaScript, and
        HTML/CSS.

        <br /> I am adept at translating complex concepts into simple, elegant solutions and thrive
        in collaborative environments where I can contribute my unique blend of
        self-taught knowledge and formal education.
      </p>

      <p className='sm:text-xl sm:!leading-8'>
        <span className="italic">Outside coding,</span> I stay active by working out and playing sports, watching movies, 
        and reading. I also enjoy{' '}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{' '}
        <span className="font-medium">Japanese language and Finance</span>.
      </p>
    </motion.section>
  );
}
