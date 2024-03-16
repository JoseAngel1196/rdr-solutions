import { Resend } from "resend";

import { EmailTemplateHtml } from "./components/EmailTemplate";

export const sendEmail = async ({ name, email, phone, message }) => {
  if (!process.env.RESEND_API_KEY) {
    return {
      error: "Missing RESEND_API_KEY",
      success: false,
    };
  }

  if (!process.env.FROM_EMAIL) {
    return {
      error: "Missing FROM_EMAIL",
      success: false,
    };
  }

  if (!process.env.TO_EMAIL) {
    return {
      error: "Missing TO_EMAIL",
      success: false,
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: "Contact request from RDR Solutions",
      html: EmailTemplateHtml({ name, email, phone, message }),
    });

    return {
      error: null,
      success: true,
    };
  } catch (error) {
    console.log(error);

    return {
      error: error.message,
      success: false,
    };
  }
};
