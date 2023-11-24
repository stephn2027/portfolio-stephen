'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import {useInView} from 'react-intersection-observer';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const {ref} = useSectionInView('Home',0.5);
  
  return (
    <section ref={ref} id='home' className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.5 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww"
              alt="prof pic"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="w-24 h-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-3xl "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{' '}
        <span className="font-bold">full-stack developer</span> with{' '}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{' '}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{delay:0.1}}
      >
        <Link
          href="#contact"
          className="group flex items-center bg-gray-900 text-white px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>
        <a className="group bg-white px-7 py-3 gap-2 flex items-center rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10" href='/CV.pdf' download>
          Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
        </a>
        <a className="bg-white p-4 gap-2 text-gray-700 flex items-center rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10" href='https://www.linkedin.com/in/stephen-uy-90268a209/' target="_blank">
          <BsLinkedin />
        </a>
        <a className="bg-white p-4 gap-2 text-[1.35rem] flex items-center rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10" href='https://github.com/stephn2027' target='_blank'>
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
