'use server';
import { Resend } from "resend";
import { validateValue } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData:FormData)=>{
   
    console.log('Running on server');
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('senderMessage');

  if(!validateValue(senderEmail,500)){
    return {
      error:'invalid email'
    }
  }
  if(!validateValue(message, 5000)){
    return {
      error:'invalid message'
    }
  }

  let data;
   try {
    data = await resend.emails.send({
      from:"Contact form <onboarding@resend.dev>",
      to:"stephn2027@gmail.com",
      subject:"Message from contact form",
      reply_to:senderEmail as string,
      react:React.createElement(ContactFormEmail,{
        message: message as string,
        senderEmail:senderEmail as string,
      })
    });
    
   } catch (error:unknown ) { 
    return {
      error: getErrorMessage(error),
    }
    
   }
   return {
    data,
   }
 

    
  };