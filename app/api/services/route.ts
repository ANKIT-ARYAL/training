import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    console.log('API /api/contact POST called');

    // Parse request body JSON
    const { name, email, message, date, time } = await req.json();
    console.log('Received data:', { name, email, message, date, time });

    // Validate inputs
    if (!name || !email || !message || !date || !time) {
      console.warn('Missing required fields');
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Check environment variables
    console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'Loaded' : 'Missing');
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Loaded' : 'Missing');
    console.log('ADMIN_EMAIL:', process.env.ADMIN_EMAIL ? 'Loaded' : 'Missing');

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});


    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
      `,
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error('Failed to send email:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
