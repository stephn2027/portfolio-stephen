'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './SubmitBtn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const [inputValue, setInputValue] = useState({
    senderEmail: '',
    senderMessage: '',
  });

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
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {' '}
        Please contact me directly at{' '}
        <a
          className="underline text-cyan-800"
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
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Email sent successfully!');
          setInputValue({ senderMessage: '', senderEmail: '' });
        }}
      >
        <input
          type="email"
          name="senderEmail"
          placeholder="Enter your email"
          required
          maxLength={500}
          className="h-14 px-4 rounded-lg borderBlack dark:text-gray-900 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          value={inputValue.senderEmail}
          onChange={(e) =>
            setInputValue({ ...inputValue, senderEmail: e.target.value })
          }
        />
        <textarea
          placeholder="Enter your message"
          name="senderMessage"
          className="h-52 rounded-lg borderBlack p-4 my-3
          dark:bg-white dark:bg-opacity-80 dark:text-gray-800 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
          maxLength={5000}
          value={inputValue.senderMessage}
          onChange={(e) =>
            setInputValue({ ...inputValue, senderMessage: e.target.value })
          }
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
