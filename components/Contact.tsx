'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
   
  

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading> Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 ">
        {' '}
        Please contact me directly at{' '}
        <a
          className="underline"
          href="mailto:stephn2027@gmail.com"
          target="_blank"
        >
          stephen2027@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          type="email"
          name="senderEmail"
          placeholder="Enter your email"
          required
          maxLength={500}
          className="h-14 px-4 rounded-lg borderBlack"
        />
        <textarea
          placeholder="Enter your message"
          name="senderMessage"
          className="h-52 rounded-lg borderBlack p-4 my-3"
          required
          maxLength={500}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Submit{' '}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
