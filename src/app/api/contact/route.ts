import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.format() },
        { status: 422 }
      );
    }

    const { name, email, phone, message } = result.data;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.log('Mocking contact email via Resend (No API Key):', { name, email, phone, message });
      return NextResponse.json(
        { success: true, message: 'Message sent successfully (development mode)' },
        { status: 200 }
      );
    }

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: 'Viruj Health <onboarding@resend.dev>',
      to: 'support@virujhealth.com',
      subject: `New Contact Form Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nMessage: ${message}`,
    });

    if (error) {
      console.error('Resend email error:', error);
      return NextResponse.json({ error: 'Failed to send email via Resend' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
