import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with an environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: 'AAMO Website <onboarding@resend.dev>', // Keep this until you verify your domain on Resend
      to: 'hello@aamoparfums.com',
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}