import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.format() },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    const { data, error } = await resend.emails.send({
      from: 'Yash Kumar <onboarding@resend.dev>',
      to: ['its.yash.kumar23@gmail.com'], // Replace with your email
      subject: `New message from ${name}`,
      react: await EmailTemplate({ name, email, message }),
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error in contact form submission:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
