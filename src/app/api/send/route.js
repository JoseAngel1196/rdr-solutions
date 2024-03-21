import { Resend } from "resend";
import { render } from "@react-email/render";

import EmailTemplate from "../../../../emails/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!process.env.RESEND_API_KEY) {
      return Response.json({
        error: "Missing RESEND_API_KEY",
        success: false,
      });
    }

    if (!process.env.FROM_EMAIL) {
      return Response.json({
        error: "Missing FROM_EMAIL",
        success: false,
      });
    }

    if (!process.env.TO_EMAIL) {
      return Response.json({
        error: "Missing TO_EMAIL",
        success: false,
      });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: "Contact request from RDR Solutions",
      html: render(EmailTemplate({ name, email, phone, message })),
    });

    if (error) {
      return Response.json({
        error: error.message,
        success: false,
      });
    }

    return Response.json({
      data,
      success: true,
      error: null,
    });
  } catch (error) {
    return Response.json({
      error: error.message,
      success: false,
    });
  }
}
