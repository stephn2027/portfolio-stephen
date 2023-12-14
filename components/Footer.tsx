import React from 'react';

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-gray-500 text-center'>
      <small className='mb-2 block text-xs'>&copy; 2024 Stephen's portfolio. All rights reserved.</small>
      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span> Built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel Hosting.
      </p>
    </footer>
  );
}
