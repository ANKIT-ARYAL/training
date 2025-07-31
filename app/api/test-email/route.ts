import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST() {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'Test Email from Next.js API',
      text: 'Hello! This is a test email to verify your SMTP setup.',
    });

    console.log('Test email sent:', info.messageId);

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error: unknown) {
  // Narrow type: check if error is instance of Error
  const errorMessage = error instanceof Error ? error.message : String(error);
  console.error('Error:', errorMessage);
  
  return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
}
}