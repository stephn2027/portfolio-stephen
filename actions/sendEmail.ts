'use server';
import { Resend } from "resend";
import { validateValue } from "@/lib/utils";

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
   try {
    await resend.emails.send({
      from:"onboarding@resend.dev",
      to:"stephn2027@gmail.com",
      subject:"Message from contact form",
      reply_to:senderEmail as string,
      text:message as string,
    });
    
   } catch (error) {
    console.log(error)
   }
 

    
  };