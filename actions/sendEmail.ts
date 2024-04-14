'use server'

import React from 'react';
import ContactFormEmail from '@/email/contact-form-email';
import { getErrorMessage, validateString } from '@/lib/utils';
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formdata: FormData) => {
    const message = formdata.get('message')
    const senderEmail = formdata.get('senderEmail')

    if (!validateString(senderEmail, 500)) {
        return {
          error: "Invalid sender email",
        };
      }
      if (!validateString(message, 5000)) {
        return {
          error: "Invalid message",
        };
      }

    let data;
     try {
        data= await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'ogberagabriel234@gmail.com',
            subject: 'Message from contact form',
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail,
            })
        })
     } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
     }
   
    return {
        data,
    };
};