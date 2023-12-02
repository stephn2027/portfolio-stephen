import React from 'react'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section id="contact">
        <SectionHeading> Contact Me</SectionHeading>
        <p> Please contact me directly at <a href='mailto:stephn2027@gmail.com' target='_blank'>stephen2027@gmail.com</a> {" "} or through this form</p>
        <form action="">
            <input type="text" placeholder='Enter Email Address'/>

        </form>
    </section>
  )
}
